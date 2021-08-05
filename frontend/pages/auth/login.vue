<template>
  <v-row justify="center" align="center" class="ma-5">
    <v-col cols="8" md="6">
      <v-form v-if="!isAuthenticated" @submit.prevent="onSubmit">
        <v-card elevation="10" min-width="200" class="text-center accent">
          <v-card-subtitle class="text-uppercase subtitle-2 secondary primary--text">
            Log Into Your Account
          </v-card-subtitle>
          <v-row justify="center" align="center" class="mt-1">
            <v-col cols="10">
              <v-text-field
                v-model="credentials.email"
                :error-messages="emailErrors"
                label="email"
                required
                filled
                outlined
                placeholder="email"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="credentials.password"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="passwordErrors"
                label="Password"
                required
                filled
                outlined
                placeholder="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="showPassword = !showPassword"
              />
              <div v-if="submitting">logging in ....</div>
              <v-btn
                block
                x-large
                elevation="10"
                class="primary text-uppercase font-weight-bold my-4"
                @click="onSubmit"
              >
                {{ title }}
              </v-btn>
            </v-col>
          </v-row>
          <v-card-text class="secondary">
            <nuxt-link to="/admin/signup" class="text-decoration-none grey--text">
              You don't have an account?
              <span class="light-blue--text text--lighten-2">
                Create Account
              </span>
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-form>
      <div v-if="error">{{ error }}</div>
    </v-col>
  </v-row>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
// import authenticateUser from '~/apollo/mutations/authenticateUser'

export default {
  mixins: [validationMixin],

  validations: {
    username: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, maxLength: maxLength(8) },
  },

  data: () => ({
    isAuthenticated: false,
    submitting: false,
    error: null,
    successfulData: null,
    credentials: {
      email: 'emma2@gmail.com',
      password: 'Test12345',
    },
    status: null,
    showPassword: false,
    title: 'Login',
  }),

  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength &&
        errors.push('username must be at most 10 characters long')
      !this.$v.username.required && errors.push('username is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('Password must be at least 8 characters long')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
  },
  methods: {
    async onSubmit() {
      try {
        await this.$strapi.login({ identifier: this.credentials.email, password: this.credentials.password })
        this.$router.push('/')
      } catch (e) {
        this.error = e
      // }
    }
  },
}
}
</script>
