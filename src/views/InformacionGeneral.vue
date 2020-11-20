<template>
   <section>
       <v-container>
           <v-row>
               <v-col cols="12"
               v-for="(dominio, i) in dominios"
               :key="i"
               >
                   <h1 class="display-1">{{dominio.titulo}}</h1>
                   <p class="text-justify mt-5 texto-negro">{{dominio.ptitulo}}</p>
                   <!-- <h3 class="subtitulo">{{dominio.subtitulo1}}</h3> -->
               </v-col>
               <v-col cols="12">
                   <v-card>
                        <v-tabs
                        background-color="indigo"
                        v-model="tab"
                        align-with-title
                        >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab
                            v-for="(item , index)  in items"
                            :key="'C' + index"
                        >
                            {{ item }}
                        </v-tab>
                        </v-tabs>
                  
                        <v-tabs-items  v-model="tab">
                        <v-tab-item
                    
                            v-for="(item, i) in nivel"
                            :key="'C' + i"
                        >
                        <v-card flat>
                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-card-text class="text-justify">{{item.contenido}}</v-card-text>
                            </v-list-item-content>
                         </v-list-item>
                       
                        </v-card>
                    </v-tab-item>
                    </v-tabs-items>
                </v-card>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols="12"
                        v-for="(tipo, i) in tiposdominio"
                        :key="i"
               >
                     <h1 class="display-1 mt-5">{{tipo.titulo}}</h1>
               </v-col>
                <v-col cols="12">
                   <v-card>
                        <v-tabs
                        background-color="indigo"
                        v-model="tabs"
                        align-with-title
                        >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab
                            v-for="(item, i)  in items2"
                            :key="'A' + i"
                        >
                            {{ item }}
                        </v-tab>
                        </v-tabs>
                  
                        <v-tabs-items  v-model="tabs">
                        <v-tab-item
                    
                            v-for="(item, i) in tipos"
                            :key="'B' + i"
                        >
                        <v-card flat>
                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-card-text class="text-justify">{{item.info}}</v-card-text>
                                <v-card-text class="text-justify">{{item.info2}}</v-card-text>
                                <v-card-text class="text-justify">{{item.info3}}</v-card-text>
                            </v-list-item-content>
                         </v-list-item>
                        </v-card>
                    </v-tab-item>
                    </v-tabs-items>
                </v-card>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols="12">
                   <h1 class="display-1 mt-5">Pasos para obtener un dominio .ni </h1>
               </v-col>
               <v-col cols="12">
                     <v-stepper v-model="e1">
                        <v-stepper-header>
                        <v-stepper-step
                            color="indigo"
                            :complete="e1 > 1"
                            step="1"
                        >
                          Verifica tu Dominio
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                        color="indigo"
                            :complete="e1 > 2"
                            step="2"
                        >
                           Completar Documentos
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            :complete="e1 > 3"
                            step="3"
                            color="indigo"
                        >
                            Pago de Dominio tercer nivel
                        </v-stepper-step>

                           <v-divider></v-divider>

                            <v-stepper-step step="4"
                            color="indigo"
                             >
                            Todo Listo!
                        </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                            class="mb-12 card-phone"
                            color="grey lighten-5"
                            height="460px"
                            flat
                            >
                        <v-row>
                            <v-col cols="12" lg="6" md="12"
                                v-model="pasos"
                                v-for="(paso, i) in pasos"
                                :key="'E' + i"    
                            >
                            <v-img
                            :src="paso.src"
                            max-height="200"
                            max-width="170"
                            class="imagen"
                            ></v-img>
                            </v-col>
                            <v-col cols="12" lg="6" md="12"
                                v-model="pasos"
                                v-for="(paso, i) in pasos"
                                :key="'F' + i"
                            >
                                  <h2>{{paso.titulo}}</h2> 
                                  <p class="texto-negro text-justify">Un nombre de dominio tiene que ser único. para saber si el nombre de dominio que deseas está disponible ve a <router-link :to="'/whois'" target="_blank"><span class="texto-negro">WhoIs</span></router-link> y asegúrate que aún no exista</p> 
                            </v-col>
                        </v-row>
                        <v-row>
                                <v-col cols="12" lg="6" md="12"
                                
                                v-for="(paso, i) in continuapasos"
                                :key="'W' + i"
                                >
                                <h2>{{paso.titulo}}</h2>
                                <p class="texto-negro text-justify">{{paso.parrafo}}</p>
                                <p class="texto-negro text-justify">{{paso.parrafo2}}</p>
                                  <!-- boton para modal -->
                                    <div class="text-center">
                                    <v-dialog
                                    v-model="dialog"
                                    width="500"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        color="indigo"
                                        dark
                                        outlined
                                        v-bind="attrs"
                                        v-on="on"
                                        class="texto"
                                        >
                                      Tabla de Zonas para Dominios .ni
                                        </v-btn>
                                    </template>

                                    <v-card>
                                        <v-card-title class="headline indigo darken-1 white--text"
                                            v-for="(paso, i) in continuapasos"
                                            :key="'R' + i"
                                        >
                                      {{paso.titulomodal}}
                                        </v-card-title>

                                      <v-simple-table>
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left text-uppercase">
                                                Sector
                                            </th>
                                            <th class="text-left text-uppercase">
                                                Dominio
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                            v-for="item in dominisoNi"
                                            :key="item.name"
                                            >
                                            <td>{{ item.sector }}</td>
                                            <td>{{ item.dominio }}</td>
                                            </tr>
                                        </tbody>
                                        </template>
                                    </v-simple-table>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="indigo darken-4"
                                            text
                                            @click="dialog = false"
                                        >
                                            Cerrar
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </div>
                                <!-- termina modal -->
                                </v-col>
                                <v-col cols="12" lg="6" md="12"
                             
                                    v-for="(paso, i) in continuapasos"
                                        :key="'E' + i"    
                                    >
                                    <v-img
                                    :src="paso.src"
                                    max-height="200"
                                    max-width="170"
                                    class="imagen2"
                                    ></v-img>
                            </v-col>
                        </v-row>
                            </v-card>

                            <v-btn
                            color="indigo"
                            @click="e1 = 2"
                            class="white--text"
                            >
                            Siguiente
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2"> 
                            <!-- paso 2 -->
                            <v-card
                            class="mb-12 card-phone2"
                            color="grey lighten-5"
                            height="400px"
                            flat
                            >
                            <v-row>
                                <v-col cols="12" lg="6" md="12"
                                v-for="(paso, i) in pasos2"
                                :key="'J' + i"
                                >
                                    <h2 class="mb-4">{{paso.titulo}}</h2>
                                     <p class="texto-negro text-justify"><a v-bind:href="paso.url" target="_blank"><span class="texto-negro">Descargar</span></a> {{paso.parrafo}}</p>
                                     <p class="texto-negro text-justify">{{paso.parrafo2}}</p>
                                     <p class="texto-negro text-justify">{{paso.parrafo3}}</p>
                                     <p class="texto-negro text-justify">{{paso.parrafo4}}</p>
                                </v-col>
                                <!-- imagen paso 2 -->
                                <v-col cols="12" lg="6" md="12"
                                    v-for="(paso , i) in pasos2"
                                    :key="'W' + i"
                                >
                                    <v-img
                                    :src="paso.src"
                                     max-height="280"
                                    max-width="130"
                                    class="imagen3"
                                    >
                                    </v-img>
                                </v-col>
                            </v-row>
                            
                            </v-card>

                            <v-btn
                            color="indigo"
                            @click="e1 = 3"
                            class="white--text"
                         
                            >
                            Siguiente
                            </v-btn>

                            <v-btn text
                                 @click="e1 = 1"
                            >
                            Atras
                            </v-btn>
                        </v-stepper-content>
                            <!-- paso 3 -->
                        <v-stepper-content step="3">
                            <v-card
                            class="mb-12    card-phone3"
                            color="grey lighten-5"
                            height="200px"
                            flat
                            >
                                <v-row>
                                    <v-col cols="12" lg="6" md="12"
                                        v-for="(paso, i) in pasos3"
                                        :key="'Z' + i"
                                    >
                                        <v-img
                                            :src="paso.src"
                                            max-height="200"
                                            max-width="130"
                                            class="imagen2"
                                        >
                                        </v-img>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="12"
                                        v-for="(paso, i) in pasos3"
                                        :key="'Y' + i"
                                    >
                                        <h2 class="mb-4">{{paso.titulo}}</h2>
                                        <p class="texto-negro text-justify">{{paso.parrafo}}</p>
                                    </v-col>
                                </v-row>
                            </v-card>

                            <v-btn
                            color="indigo"
                            @click="e1 = 4"
                            class="white--text"
                         
                            >
                            Siguiente
                            </v-btn>

                            <v-btn text
                             @click="e1 = 2"
                            >
                            Atras
                            </v-btn>
                        </v-stepper-content>
                        <!-- paso 4 -->
                         <v-stepper-content step="4">
                            <v-card
                            class="mb-12 card-phone4"
                            color="grey lighten-5"
                            height="200px"
                            flat
                            >
                                <v-row>
                                    <v-col cols="12" lg="6" md="12"
                                        v-for="(paso, i) in pasos4"
                                        :key="'U' + i"
                                    >
                                        <h2 class="mb-4">Todo Lsito!</h2>
                                        <p class="texto-negro text-justify">{{paso.parrafo}}</p>
                                        <p class="texto-negro text-justify">{{paso.parrafo2}} <router-link v-bind:to="'/contactenos'" target="_blank"><span class="texto-negro">Contáctenos</span> </router-link></p>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="12"
                                            v-for="(paso, i) in pasos4"
                                            :key="'S' + i"
                                    >
                                        <v-img
                                            :src="paso.src"
                                            max-height="250"
                                            max-width="130"
                                            class="imagen2"
                                        ></v-img>
                                    </v-col>
                                </v-row>
                            </v-card>

                            <v-btn
                            color="indigo"
                            @click="e1 = 1"
                            class="white--text"
                            >
                            Siguiente
                            </v-btn>

                            <v-btn text
                             @click="e1 = 3"
                            >
                            Atras
                            </v-btn>
                        </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols="12" lg="6" md="12"
                    class="mt-8"
                    v-for="(beneficio, i) in registrarD"
                    :key="'N' + i"
               >
                   <h2 class="mb-4">{{beneficio.titulo}}</h2>
                   <p class="texto-negro text-justify">{{beneficio.ben1}}</p>
                   <p class="texto-negro text-justify">{{beneficio.ben2}}</p>
                   <p class="texto-negro text-justify">{{beneficio.ben3}}</p>
                   <p class="texto-negro text-justify">{{beneficio.ben4}}</p>
                   <p class="texto-negro text-justify">{{beneficio.ben5}}</p>
               </v-col>
               <v-col cols="12" lg="6" md="12"
                        class="mt-10"
                         v-for="(beneficio, i) in registrarD"
                        :key="'Q' + i"
               >
                   <v-img
                   :src="beneficio.src"
                    max-height="250"
                    max-width="130"
                   class="imagen2"
                   ></v-img>
               </v-col>
           </v-row>
       </v-container>
   </section>
</template>
<script>
export default {
    data (){
        return {
            dialog:false,
            e1: 1,
            dominios:[
                {
                    titulo:'¿Que es un Dominio?',
                    ptitulo: 'Un dominio es un nombre único e inequívoco a nivel mundial para una región de Internet delimitada de forma lógica como, por ejemplo, una página web.El dominio, como parte fundamental de un Uniform Resource Locator (URL), señala dónde puede ser encontrado un recurso dentro del sistema jerárquico de nombres de dominio Domain Name System (DNS). La traducción de los nombres de dominio en direcciones IP se realiza a través de los llamados Nameserver, servidores especializados responsables de la asignación de nombres a las direcciones IP. Los usuarios de Internet ven los dominios de la siguiente forma: www.prueba.com.ni.',
                    // subtitulo1:'Dominios Genéricos'
                    
                }
            ],
        
            tab: null,
            items: [
              'Dominios Genéricos', 'Dominios De País',
              
            ],
            nivel: [
                {
               
                contenido: 'Son considerados dominios genéricos (o gTLD) los dominios creados durante las primeras etapas del registro de dominios y que no están enfocados a un país en concreto, en este rango de tiempo fueron creados los dominios .com, .net y .org, posteriormente se añadirían a esta denominación los dominios .info, .biz y .pro, independientemente de sus posibles restricciones de uso. Además de los dominios descritos anteriormente, también son considerados genéricos los dominios .tel, .cat, .mobi, .asia, .jobs,  y .travel entre otros. Estos dominios se subastan sin ninguna restricción ni ningún tipo de requisito como documentación legal que acredite al requirente del dominio como persona autorizada para registrarlo, ellos no cumplen las normativas que dicta la OMPI.'

              },
              {
                contenido: 'Un dominio de nivel superior geográfico o dominio de nivel superior de código de país (en inglés: country code top-level domain o ccTLD) es un dominio de Internet usado y reservado para un país o territorio dependiente. Los ccTLD (véase la lista del IANA) tienen una longitud de dos caracteres, y la mayoría corresponden al estándar de códigos de países ISO 3166-1 (las diferencias se explican más adelante). Cada país designa gestores para su ccTLD y establece la reglas para conceder dominios. Algunos países permiten que cualquier persona o empresa del mundo adquiera un dominio dentro de sus ccTLD, por ejemplo Austria (.at) o España (.es). Otros países solo permiten a sus residentes adquirir un dominio de su ccTLD, por ejemplo Australia (.au), Andorra (.ad) y Chile (.cl)'

              }    
            ],
            tiposdominio:[
                {
                    titulo:'Tipos de Dominios'
                }
            ],
             tabs: null,
              items2: [
              'Dominios de Primer Nivel', 'Dominio de Segundo Nivel', 'Dominio de Tercer Nivel'
              
            ],
            tipos: [
                {
                    info:'Los gTLD son dominios genéricos y que no se ajustan al ámbito de un país en particular. Es el caso de los más conocidos .com, .net, .org, .edu, .info, .biz',
                    info2:'.COM: Se suele utilizar por Empresas y Organizaciones Comerciales de todo el mundo. Es el más utilizado actualmente. Si Usted representa a una empresa comercial, probablemente deba estar aquí.',
                    info3:'ORG: Lo deberían de utilizar sólo por instituciones sin ánimo de lucro y ONG.'
                },
                {
                    info:'Es el caso de los ccTLD son dominios que están asociados a un país determinado, como el .es en España, o el .fr en Francia, .it Italia, .de Alemania.',
                    info2:'.ES: Si su área de actuación está limitada a España, o quiere identificarse claramente con una página española. Hoy en día están liberalizados con los cual no es tan difícil registrar uno como hace unos meses.'
                },
                {
                    info:'Son los dominios del tipo por ejemplo: uni.edu.ni, cnu.edu.ni. Tienen la misma finalidad que los dominios de primer nivel pero con la territorialidad nicaragüense. Dominios .gob.ni, edu.ni. Organismos Públicos y Entidades e Instituciones relacionadas con la enseñanza o investigación en Nicaragua.'
                }
            ],
            
            pasos: [
                {
                    titulo:'#1 - Verifica que tu dominio se encuentre disponible',
                     src: require('../assets/img/stepchar3.png'),
                     
                },
            ],
            pasos2:[
                {
                    titulo:'#2 - Completa los siguientes documentos',
                    parrafo:'y completa los documentos necesarios para hacer constatar la legalidad y pertenencia de tu nuevo dominio .ni. Estos documentos son:',
                    parrafo2:'Carta De Compromiso: Es necesario para nosotros que el solicitante, ya sea una empresa o una persona firme un compromiso de responsabilidad y cumplimiento de las normas establecidas para la adquicision de un nuevo dominio .ni.',
                    parrafo3:'Formulario de Solicitud: En este documento se detalla todo acerca de tu dominio, a saber, el nombre de tu nuevo dominio; los contactos; la IP correspondiente y DNS.',
                    parrafo4:'Nota: Si el solicitante del nuevo dominio .ni es representante de una empresa, éste deberá entregar una carta poder para constatar que realmente representa a la empresa que adquirirá el dominio.',
                    url:'https://www.nic.ni'
                },
                {
                    src: require('../assets/img/stepchar1.png')
                }
                
            ],
            pasos3:[
                {
                    titulo:'#3 - Especificaciones de pago de tu nuevo dominio de tercer nivel',
                    src:require('../assets/img/pago.png'),
                    parrafo:'El costo de tu nuevo dominio de tercer nivel es de $50 anuales, puedes realizar tu pago de dominio a través transacciones bancarias o puedes venir directamente a nuestras oficinas en la Universidad Nacional de Ingeniería.'
                }
            ],
            pasos4:[
                {
                    parrafo:'Después de haber realizado estos pasos, la activación de tu nuevo dominio tomará 24 horas. Puedes buscar tu dominio en el WHOIS para verificar que ya esté activo.',
                    parrafo2:'Para saber más acerca de cómo adquirir un nuevo dominio .ni por favor.',
                    src:require('../assets/img/charman2.png')
                }
            ],
            continuapasos:[
                {
                    titulo:'¿Qué tipo de Dominio debería elegir?',
                    src:require('../assets/img/questions.png'),
                    parrafo:'Existen diversos tipos de dominios cada uno en relacion a la actividad desarrollada dentro un sector específico (ejemplo .gob.ni - Gobierno, .edu.ni - Educación, .org.ni Organizaciones, etc). Estos dominios son comunmente conocidos como dominios de tercer nivel',
                    parrafo2:'El NIC.NI tambien tiene disponibles dominios de segundo nivel (ejemplo: miempresa.ni)',
                    titulomodal:'Tabla de Zonas para Dominios .ni'
                }
            ],
            registrarD:[
                    {
                        titulo:'Beneficios de Registrar un Dominio .Ni',
                        ben1:'Proteges tu nombre personal o el de tu empresa y obtienes un identificador fácil de recordar para utilizarlo en Internet.',
                        ben2:'Tu nombre o el de tu empresa en Internet se relacionará directamente con Nicaragua.',
                        ben3:'Podrás utilizarlo para tener presencia en Internet y promocionarte o promocionar a tu empresa a nivel mundial, ya que al tener una página en Internet, tu página se puede accesar desde cualquier parte del mundo. Ejemplo: www.nombredemiempresa.com.ni',
                        ben4:'Podrás utilizarlo para tus direcciones de correo electrónico.',
                        ben5:'Ejemplo: minombre@nombredemiempresa.com.ni',
                        src:require('../assets/img/charman3.png')

                    }
            ],
            dominisoNi:[
                {
                    sector:'Sector General',
                    dominio:'.ni'
                },
                {
                    sector:'Comercial',
                    dominio:'.com.ni'
                },
                {
                    sector:'Educativo',
                    dominio:'.edu.ni'
                },
                {
                    sector:'Corporativo',
                    dominio:'.co.ni'
                },
                {
                    sector:'Tecnología en redes',
                    dominio:'.net.ni'
                },
                {
                    sector:'Internacionales',
                    dominio:'.int.ni'
                },
                {
                    sector:'Gobierno',
                    dominio:'.gob.ni'
                },
                {
                    sector:'Organizaciones',
                    dominio:'.org.ni'
                },
                {
                    sector:'Salud',
                    dominio:'.med.ni'
                }
            ]
            
        }
    }
}
</script>
<style>
.texto-negro{
    color: #000 !important;
}
.texto{
    font-size: 12px !important;
}
.texto-negro span:hover{
    color: red !important;
}
.subtitulo{
    font-size: 28px !important;
}
.imagen{
   float: right;
   margin-right: 100px;
}
.imagen3{
    float: left;
    margin-top: -300px;
    margin-left: 100px;
}
.imagen2{
    float: left;
    margin-left: 100px;
}
@media ( max-width: 725px){
    .imagen{
        display: none !important;
    }
    .imagen2{
        display: none !important;
    }
    .imagen3{
        display: none !important;
    }
    .card-phone{
        height: 600px !important;
    }
    .card-phone2{
        height: 620px !important;
    }
    .card-phone3{
        height: 300px !important;
    }
    .card-phone4{
        height: 250px !important;
    }
}
</style>