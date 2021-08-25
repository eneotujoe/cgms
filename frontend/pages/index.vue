<template>
  <v-row no-gutters>
    <v-col>
      <v-img>
        <v-row align="center" justify="center" class="mb-5">
          <v-col cols="11" class="text-center primary--text">
            <h5 class="text-capitalize mb-4">WATCH LIVE TV</h5>
            <div class="video-responsive">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/Fd7qMtfYyIU" frameborder="1"></iframe>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-col>
  </v-row>
</template>
<script>
export default {
}
</script>
<style scoped>
.video-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.video-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>
