<template>
<div id="inicio">


  <v-img
  class="img-top"
    dark
    height="700"
    src="../assets/img/datacenter.jpg"
  >
 
   <v-slide-x-transition appear>
    <v-row
      align="top"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 id="h1paralax" class="display-1 font-weight-thin mb-4">
          VENTAJAS DE  TENER UN DOMINIO .NI
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
      <div id="paralax-front">
        <p class="text-left">Proteges tu nombre personal o el de tu empresa y obtienes un identificador fácil de recordar para utilizarlo en Internet.</p>
        <p class="text-left">Tu nombre o el de tu empresa en Internet se relacionará directamente con Nicaragua.
      </p>
      <p class="text-left">
        Podrás utilizarlo para tener presencia en Internet y promocionarte o promocionar a tu empresa a nivel mundial, ya que al tener una página en Internet, tu página se puede accesar desde cualquier parte del mundo. Ejemplo: www.nombredemiempresa.com.ni
      </p>
      <p class="text-left">Podrás utilizarlo para tus direcciones de correo electrónico.</p>
      </div>
      </v-col>
    </v-row>
 
  </v-img>  
 
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
    Parnerts: () => import ('@/components/Parnerts')
  }
    
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
margin-top: -90px;
}
#paralax-front{
margin-top: 60px;
font-size: 22px;
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
.cisco{
  display: none !important;
}
}
@media (min-width: 725px){
  .phone{
    display: none !important;
    
  }
}
</style>