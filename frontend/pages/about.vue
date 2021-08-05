<template>
  <v-row justify="center" class="ma-5">
    <v-col cols="12">
      <div class="pl-8 text-center">
        <h2 class="text-uppercase mb-5">Welcome To Church Growth Management System</h2>
        <p>Contact: info@example.com, +234 703 xxx xxxx</p>
      </div>
    </v-col>
    <v-col cols="10" md="6">
      <v-form v-model="valid" @submit.prevent="onSubmit">          
          <v-row justify="center" align="center" class="mt-1">
            <v-col cols="10">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-0"
                >
                  <v-text-field
                    v-model="name"
                    label="Name"
                    required
                    outlined
                    dense
                    placeholder="Name"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    outlined
                    dense
                    placeholder="email address"
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                <v-text-field
                  v-model="phoneNumber"
                  label="Phone Number"
                  required
                  outlined
                  dense
                  placeholder="Phone Number"
                  :rules="phoneNumberRules"
                ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                  <v-text-field
                    v-model="country"
                    label="Country"
                    required
                    outlined
                    dense
                    placeholder="Country"
                    :rules="countryRules"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-textarea
                v-model="message"
                label="Message"
                required
                outlined
                placeholder="Message"
                :rules="messageRules"
              ></v-textarea>
              <div v-if="submitting">submitting ....</div>
              <v-btn
                block
                large
                elevation="10"
                class="primary text-uppercase font-weight-bold my-4"
                @click="onSubmit"
              >
                submit
              </v-btn>
            </v-col>
          </v-row>
      </v-form>
      <div v-if="error">{{ error }}</div>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
// import createContact from '~/apollo/mutations/contactForm'

export default {
  data: () => ({
    submitting: false,
    error: null,
    status: null,
    valid: false,
    title: 'Contact Us',
    name: '',
    email: '',
    phoneNumber: null,
    country: '',
    message: '',
    nameRules: [
        v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    phoneNumberRules: [
        v => !!v || 'Phone number is required',
    ],
    countryRules: [
        v => !!v || 'Coutry number is required',
    ],
    messageRules: [
      v => !!v || 'Message is required',
    ],
  }),

  computed: {
    ...mapGetters(['socialLinks']),
  },

  methods: {
    async onSubmit() {
      // this.$refs.form.validate()
      // this.submitting = true
      // try {
      //   await this.$apollo
      //     .mutate({
      //       mutation: createContact,
      //       variables: {
      //           name: this.name,
      //           email: this.email,
      //           phoneNumber: this.phoneNumber,
      //           country: this.country,
      //           message: this.message,
      //         },
      //     })
      // } catch (e) {
      //   this.error = e
      // }
      // this.$swal({
      //   title: 'Please wait',
      //   text: 'click ok',
      //   icon: 'success',
      //   button: 'Ok',
      // })
    },
  },
}
</script>
