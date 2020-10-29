<template>
<!-- <v-container-fluid>
    <v-row>
        <v-col>
            <v-card
                    color="#101010"
                    class="pt-3"
                    flat
                    >
                    
                <v-container
                    max-height="48px"
                    >
                        
                        <div class="text-center">
                        
                        <p>
                    ©<span id="año"></span> NIC.NI. Todos los Derechos Reservados. 
                    </p>
                    
                </div>
                
                </v-container>
            
            </v-card>
        </v-col>
    </v-row>

</v-container-fluid> -->
   
 <v-footer padless color="#101010">
    <v-container
        max-height="48px" >      
                 <div class="text-center">   
                    <p class="pt-3">
                    ©<span id="año"></span> NIC.NI. Todos los Derechos Reservados. 
                    </p>  
                </div>   
    </v-container>
  </v-footer>
</template>
<script>
 
 export default {
 
 name: 'Footer',
 
 methods: {
 // Imprimo el año actual 
    obtenerAño() {
    var año = new Date().getFullYear();
    document.getElementById('año').innerHTML = año; 
    }
    },
    
    mounted () {
    this.obtenerAño()
    },
    
    }
 
</script>
<style scope>
.v-application p {
    color: #fff;
}
.v-sheet.v-card{
    border-radius: 0;
    
}
</style>