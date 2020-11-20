<template>
 <section id="faqs">
     <v-container>
         <v-row>
             <v-col cols="12"
             >
                <h1
                    class="display-1 text-center"
                >Preguntas Frecuentes</h1>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="12"
             >
                <template>
                <v-expansion-panels focusable>
                    <v-expansion-panel
                    v-for="(item,i) in faqs"
                    :key="i"
                    >
                    <v-expansion-panel-header>{{item.pregunta}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{item.resp}}
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                </template>
             </v-col>
         </v-row>
     </v-container>
 </section>
</template>
<script>
export default {
    data () {
        return {
            faqs: [
                {
                    pregunta:'¿Que es un Dominio?',
                    resp:'Un dominio es un nombre único e inequívoco a nivel mundial para una región de Internet delimitada de forma lógica como, por ejemplo, una página web.El dominio, como parte fundamental de un Uniform Resource Locator (URL), señala dónde puede ser encontrado un recurso dentro del sistema jerárquico de nombres de dominio Domain Name System (DNS). La traducción de los nombres de dominio en direcciones IP se realiza a través de los llamados Nameserver, servidores especializados responsables de la asignación de nombres a las direcciones IP. Los usuarios de Internet ven los dominios de la siguiente forma: www.prueba.com.ni'
                },
                {
                    pregunta:'¿Que es un Servidor DNS?',
                    resp:'Un servidor DNS, también conocido como servidor de nombres, consiste en un software para servidores que recurre a la base de datos de un DNS para responder a las peticiones que guardan relación con el espacio de nombres de dominio. Como, por regla general, se alojan en hosts dedicados, también se denominan así a los ordenadores que albergan estos programas.'
                },
                {
                    pregunta:'¿Que es una zona DNS?',
                    resp:'El DNS se divide en muchas zonas diferentes. Estas zonas distinguen las áreas claramente gestionadas en el espacio de nombres del DNS. Una zona DNS es una parte del espacio de nombres de DNS que está gestionada por una organización o administrador específicos. Una zona DNS es un espacio administrativo que permite un mayor control granular de los componentes de DNS, tales como los servidores de nombres autorizados. El espacio de nombre de dominio es un árbol jerárquico, con el dominio raíz DNS en la parte superior. Una zona DNS comienza en un dominio dentro del árbol y se puede extender hacia abajo en subdominios para que una entidad pueda gestionar múltiples subdominios.'
                },
                {
                    pregunta:'¿Como verificar si un Dominio está Disponible?',
                    resp:'Visite este Link '
                },
                {
                    pregunta:'¿Funciona este dominio solo para Nicaragua?',
                    resp:'No, Los dominio Regionales .com.ni, edu.ni, Org.ni Etcétera funcionan a nivel mundial con la única diferencia que un dominio regional ubica la zona desde fue registrado.'
                },
                {
                    pregunta:'¿Registramos Sub-dominios?',
                    resp:'No, no registramos sub-dominios esa gestión es a nivel de servidor DNS para regístralo contáctese con su proveedor de hosting.'
                },
                {
                    pregunta:'¿Diferencia entre Dominios Genéricos y Dominios Regional?',
                    resp:'Dominios Genéricos: Son considerados dominios genéricos (o gTLD) los dominios creados durante las primeras etapas del registro de dominios y que no están enfocados a un país en concreto, en este rango de tiempo fueron creados los dominios .com, .net y .org, posteriormente se añadirían a esta denominación los dominios .info, .biz y .pro, independientemente de sus posibles restricciones de uso. Además de los dominios descritos anteriormente, también son considerados genéricos los dominios .tel, .cat, .mobi, .asia, .jobs,  y .travel entre otros. Estos dominios se subastan sin ninguna restricción ni ningún tipo de requisito como documentación legal que acredite al requirente del dominio como persona autorizada para registrarlo, ellos no cumplen las normativas que dicta la OMPI. Dominios De País Un dominio de nivel superior geográfico o dominio de nivel superior de código de país (en inglés: country code top-level domain o ccTLD) es un dominio de Internet usado y reservado para un país o territorio dependiente. Los ccTLD (véase la lista del IANA) tienen una longitud de dos caracteres, y la mayoría corresponden al estándar de códigos de países ISO 3166-1 (las diferencias se explican más adelante). Cada país designa gestores para su ccTLD y establece la reglas para conceder dominios. Algunos países permiten que cualquier persona o empresa del mundo adquiera un dominio dentro de sus ccTLD, por ejemplo Austria (.at) o España (.es). Otros países solo permiten a sus residentes adquirir un dominio de su ccTLD, por ejemplo Australia (.au), Andorra (.ad) y Chile (.cl)'
                },
                {
                    pregunta:'¿Cuando comprar un Dominio Genérico en el Nic.ni?',
                    resp:'No, Únicamente dominio Regionales, .com.ni, edu.ni, Org.ni Etcétera para verificar todas las zonas visite este LINK'
                },
                {
                    pregunta:'¿Puedo aduirir más de un Dominio?',
                    resp:'Si, Puede adquirir la cantidad de dominios que usted desee.'
                },
                {
                    pregunta:'¿Si pago más de una anualidad existe una política de Descuento?',
                    resp:'Si, para mayor información visite este Link'
                },
                {
                    pregunta:'¿Cuáles son las Formas de pago de un Dominio.?',
                    resp:'Cheque, Efectivo, Tarjetas de Crédito y/o Debido También puede realizar el pago en línea.'
                },
                {
                    pregunta:'¿Se le aplica Retención o están exentos?',
                    resp:'No, Estamos exentos de Retenciones'
                },
                {
                    pregunta:'¿Se puede Utilizar el mismo Dominio para página web y para correos Electrónicos.?',
                    resp:'Si, un dominio se puede utilizar para el website y para Crear cuentas de correo.'
                },
                {
                    pregunta:'¿Cuantos DNS puede tener un Dominio.?',
                    resp:'Un Dominio puede tener ilimitadas cantidades de DNS asociados.'
                },
                {
                    pregunta:'¿Como Realizar un cambio de DNS?',
                    resp:''
                },
                {
                    pregunta:'¿Como Realizar un cambio de DNS?',
                    resp:''
                }

            ],
        }
    }
}
</script>