<template>
   <section id="bienvenido">
       <v-container>
           <v-row>
              <v-col cols="12"
                        lg="8"
                        md="12"
              >
                  <h1 class="text-uppercase linebt"
                    v-for="(item, i) in items"
                    :key="i"
                    text
                  >{{item.text}}</h1>
                  <p class="text-justify parrafo-bienvenido mt-8"
                        v-for="(item, i) in items2"
                        :key="'A' + i"
                        text
                  >
                    {{item.text}}
                  </p>
                  <!-- <v-btn
                    depressed
                    elevation="3"
                    outlined
                    tile
                    >Ver más</v-btn> -->
                    <v-btn
                        class="mt-2 mb-15 top"
                        color="#003791"
                        elevation="3"
                        large
                      ><router-link to="/historia">Leer más</router-link>
                      </v-btn>
              </v-col> 
              <v-col cols="12"
                        lg="4"
                        md="12"
              >
                  <v-img dark
                        height="250"
                        width="250"
                        src="../assets/img/logoNiCircle.png"
                        class="float-center ml-13 centro"
                        >

                  </v-img>
              </v-col> 
           </v-row>
       </v-container>

   </section>
</template>

<script>
export default {
    data: () => ({
        items: [
            {'text':'Bienvenidos a Nic .Ni'}
        ],
        items2:[
            {'text':'Somos una organización sin fines de lucro, dedicados a promover el uso de internet en nuestro país teniendo como meta alcanzar los sectores de la sociedad nicaragüense con pocos recursos económicos, facilitándoles el registro de su dominio y el hospedaje de sus sitios web y buzones de correo.'}
        ]
    })
}
</script>
<style>
.parrafo-bienvenido{
    color: #000 !important;
}
.v-application a{
    text-decoration: none;
}
@media (max-width: 725px){

    .linebt{
        font-size: 28px !important;
    }
    .centro{
        display: none !important;
    }
    
}
/* .linebt{
    border-left: 2px solid #398BF7;
} */
</style>