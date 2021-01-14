<template>
    <section>
    <v-img class="fullwith" :height="$vuetify.breakpoint.smAndUp ? '40vh' : '100vh'"
        gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .10)"
        src="../assets/img/whois-team.jpg"
        >
    </v-img>
 <v-container>
            <v-row>
                <v-col cols="12"
                    lg="12"
                    md="12"
                >
                 <h1 class="color-texto display-1 text-center mt-5 mb-5"
                        v-for="(item, i) in titulo"
                        :key="i"
                        text
                        >{{item.text}}
                </h1>
                </v-col>
            </v-row>
        </v-container>
     <!-- <h3></h3> -->
    </section>
</template>
<script>
export default {
     data:() => ({
        titulo:[
            {
              'text': 'Registro de dominio en línea'
            }
          ],
     })
}
</script>
<style>
.fullwith{
    margin-top: -20px;
    margin-bottom: -20px;
}
.color-texto{
 color: #616161;
}
</style>