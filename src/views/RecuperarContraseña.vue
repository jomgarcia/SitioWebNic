<template>
    <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '100vh' : '100vh'"
    color="primary"
    tile
  >
    <v-img
    class="fullwith"
      src="../assets/img/volcan.jpg"
      gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .60)"
      height="100%"
    >
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card
                color="#003783"
                max-width="374"
                class="card-top mx-auto my-12 rounded-lg"
                elevation="4"
                outlined
                tile
                >
                <h3 class="white--text text-center card-title">Recuperar Contraseña</h3>
                </v-card>
            </v-col>    
        </v-row>        
    </v-container>            
    </v-img>
    </v-sheet>
</template>
<script>
export default {
    
}
</script>
<style>
.fullwith{
    margin-top: -20px; 
}
.card-top{
    top: 80px;
    background: rgb(0, 56, 145, .63) !important;
}
</style>