<template>
   <section id="valores">
       <v-container>
           <v-row>
               <v-col cols="12">
                   <h1 class="display-1"
                        v-for="( item , i) in items"
                        :key="i"
                        text
                   >{{item.text}}</h1>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols="12">
                <p class="text-justify primer-parrafo"
                    v-for="(item, i) in items2"
                    :key="'A' + i"
                    text
                >{{item.text}}</p>
               </v-col>
           </v-row>
       </v-container>
   </section>
</template>
<script>
export default {
    data: () =>({
        items:[
            {'text': 'Valores'}
        ],
        items2:[
            {'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc, leo etiam libero, quam gravida. Vel cras et nulla vitae velit molestie. Id turpis aliquet ac commodo eget. Tellus aliquam magna sem dui sit. At phasellus dictum integer egestas. Cursus vestibulum nam ac felis eget. Ullamcorper sodales dolor dictum donec cras diam pellentesque arcu auctor. Tellus tellus quis et sem. Lectus lacus, sem fermentum nunc cursus odio. Ac sit est mauris velit, ante neque. Sit pharetra ultricies vulputate posuere. In vel dolor enim, vestibulum, in. Cursus vitae accumsan, vitae nunc nec nunc cras lorem non. Erat malesuada quis ipsum aliquam placerat nec diam ultricies tristique.'},
            {'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc, leo etiam libero, quam gravida. Vel cras et nulla vitae velit molestie. Id turpis aliquet ac commodo eget. Tellus aliquam magna sem dui sit. At phasellus dictum integer egestas. Cursus vestibulum nam ac felis eget. Ullamcorper sodales dolor dictum donec cras diam pellentesque arcu auctor. Tellus tellus quis et sem. Lectus lacus, sem fermentum nunc cursus odio. Ac sit est mauris velit, ante neque. Sit pharetra ultricies vulputate posuere. In vel dolor enim, vestibulum, in. Cursus vitae accumsan, vitae nunc nec nunc cras lorem non. Erat malesuada quis ipsum aliquam placerat nec diam ultricies tristique.'},
            {'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc, leo etiam libero, quam gravida. Vel cras et nulla vitae velit molestie. Id turpis aliquet ac commodo eget. Tellus aliquam magna sem dui sit. At phasellus dictum integer egestas. Cursus vestibulum nam ac felis eget. Ullamcorper sodales dolor dictum donec cras diam pellentesque arcu auctor. Tellus tellus quis et sem. Lectus lacus, sem fermentum nunc cursus odio. Ac sit est mauris velit, ante neque. Sit pharetra ultricies vulputate posuere. In vel dolor enim, vestibulum, in. Cursus vitae accumsan, vitae nunc nec nunc cras lorem non. Erat malesuada quis ipsum aliquam placerat nec diam ultricies tristique.'},
            {'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc, leo etiam libero, quam gravida. Vel cras et nulla vitae velit molestie. Id turpis aliquet ac commodo eget. Tellus aliquam magna sem dui sit. At phasellus dictum integer egestas. Cursus vestibulum nam ac felis eget. Ullamcorper sodales dolor dictum donec cras diam pellentesque arcu auctor. Tellus tellus quis et sem. Lectus lacus, sem fermentum nunc cursus odio. Ac sit est mauris velit, ante neque. Sit pharetra ultricies vulputate posuere. In vel dolor enim, vestibulum, in. Cursus vitae accumsan, vitae nunc nec nunc cras lorem non. Erat malesuada quis ipsum aliquam placerat nec diam ultricies tristique.'}
        ]
    })
}
</script>
<style>
.primer-parrafo{
  color: #000 !important;
}
</style>