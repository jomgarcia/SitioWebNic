<template>
<div id="inicio">

<bienvenido-nic class="img-top" />


  <v-img
  class="img-top"
    dark
    height="600"
    src="../assets/img/datacenter.jpg"
  >
 
   <v-slide-x-transition appear>
    <v-row
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 id="h1paralax" class="display-1 font-weight-thin mb-4"
          v-for="(item,  i) in items"
          :key="i"
          text
        >
          {{item.text}}
        </h1>
      
      </v-col>
    </v-row>
   </v-slide-x-transition>
     <v-row no-gutters 
      justify="center"
     >
      <v-col
        sm="6"
        md="5"
        lg="6"
      >
      </v-col>
      <v-col
        sm="6"
        md="5"
        offset-md="2"
        lg="6"
        offset-lg="0"
      >
      <div id="parallax-front">
        <v-list color="transparent" 
            v-for="(requisito, i) in requisitos"
           :key="'J' + i"
            >
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="green" v-text="requisito.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-action-text class="parallax-front"  v-text="requisito.text"></v-list-item-action-text>
                 </v-list-item-content>
             </v-list-item>              
           </v-list>
      </div>
      </v-col>
    </v-row>
  </v-img>
  <section class="noticia">
    <noticia-nic />
  </section>  
<banner-cisco class="cisco"/>
 <card-phone class="phone"/> 
 <parnerts/>
  </div>
</template>
<script>

export default {
  // @ is an alias to /src
  components:{
    
    BannerCisco: () => import ('@/components/BannerCisco'),
    CardPhone: () => import ('@/components/CardPhone'),
    Parnerts: () => import ('@/components/Parnerts'),
    BienvenidoNic: () => import ('@/components/BienvenidoNic'),
    NoticiaNic: () => import ('@/components/NoticiaNic')
  },
  data: () =>({

    items: [
      {
        'text':' VENTAJAS DE  TENER UN DOMINIO .NI'
      }
    ],
     requisitos:[
                        { text:'Proteges tu nombre personal o el de tu empresa y obtienes un identificador fácil de recordar para utilizarlo en Internet.', icon: 'mdi-checkbox-marked-circle'},
                        { text:'Tu nombre o el de tu empresa en Internet se relacionará directamente con Nicaragua.', icon:'mdi-checkbox-marked-circle'},
                        { text:' Podrás utilizarlo para tener presencia en Internet y promocionarte o promocionar a tu empresa a nivel mundial, ya que al tener una página en Internet, tu página se puede accesar desde cualquier parte del mundo. Ejemplo: www.nombredemiempresa.com.ni', icon:'mdi-checkbox-marked-circle'},
                        { text:'Podrás utilizarlo para tus direcciones de correo electrónico.', icon:'mdi-checkbox-marked-circle'},
                       
            ],
  })
    
  }
</script>
<style  scoped>
/* #inspire img {
    position: absolute;
    width: 1440px;
    height: 960px;
    left: 0px;
    top: 0px;
} */
#h1paralax{
  margin-top: 40px !important;
  font-weight: 600 !important;
}
.v-main .img-top{
margin-top: 40px;
}
#parallax-front{
margin-top: 60px;


}
.parallax-front{
  font-size: 16px !important;
}
.v-application p {
  padding: 10px;
}
@media (max-width: 725px ) {
  #paralax-front{
    margin-top: 30px;
    font-size: 16px;
    padding:10px;
 
}
#parallax-front{
margin-top: -20px;
}
.h1paralax{
  margin-top: 10px;
}

.cisco{
  display: none !important;
}
}
@media (min-width: 725px){
  .phone{
    display: none !important;
    
  }
  .parallax-front{
    font-size: 14px !important;
  }
}
</style>