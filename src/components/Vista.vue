<template>
    <v-main class="py-5">
        <router-view />
    </v-main>
</template>
<script>
  export default {
    metaInfo () {
      return {
        titleTemplate: '%s Nic.Ni'
      }
    },

    watch: {
      $route: function () {
        this.$nextTick(() => this.$vuetify.goTo(0))
      }
    }
  }
</script>
