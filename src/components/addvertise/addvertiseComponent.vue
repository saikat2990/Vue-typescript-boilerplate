<template>
    <div>
        <div class="sidebar">
            <p>About Us</p>
            <div class="article-preview">
                <div class="article-meta">
                    <div class="tag-list">
                        <p v-if="feedingNumber" class="">
                            Now we have <strong>{{feedingNumber}}</strong> global feeds
                        </p>
                        <br/>
                        <p>
                            We almost working <strong>{{todoNumber}}</strong> no of project done/doing
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
        <br/>
        <AdverArtisanComponent v-bind:artisanlist="artisanList" v-on:detailshow="details"></AdverArtisanComponent>
    </div>
 
  
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';
import eventBus from '../../plugins/eventBus';
import {Artisan,ArtisanDisplay} from '../../Models/ArtisanModel';
import AdverArtisanComponent from './adverArtisanComponent.vue';
import global from '../../store/modules/global'

@Component({
  components: {
      AdverArtisanComponent
  },
})
export default class AddvertiseComponent extends Vue{
    feedingNumber= 0;
    todoNumber=0;
    artisanList: Artisan[];
    details(id){
        /*
         parent 
        */
    //    global.state.showArtisan={
    //        id:id,
    //        access:true
    //    }
       const artId = this.artisanList[id-1].id;
        if(id%2==0){
            const art="Can not showing with out premium id";
            // const content={
            //     id:id,
            //     access:true,
             
            // }
            // eventBus.$emit('detailshowaAccess',content);
            
            // console.log("access granted");

        }
        // else{
        //     const content={
        //         id:id,
        //         access:false,
        //         art:art
        //     }
        //     eventBus.$emit('detailshowaAccess',content);
        // }
     
        this.$router.push({ name: 'artisan', params: { id: `${artId}` } })
        
       
    }
    async created(){
        eventBus.$on('feed_number',(number)=>{
            this.feedingNumber = number
        })
        
        eventBus.$on('total_todo_number',(number)=>{
            this.todoNumber = number
        })    

        this.artisanList = [
            
            {   id:1,
                projectName:"Zaproid" ,
                technology: "Unity",
                details:"Video games are real-time experiences because they respond instantly to player input. Every image you see on your monitor or in your VR headset is built by the computer and pushed to the display in a fraction of a second, sometimes hundreds of times a second", 
            },
            {   
                id:2,
                projectName:"CRM" ,
                technology: "Angular",
                details:"AngularJs is Javascript framework and it becomes very important now days, you can create very beautiful and useful single screen pages using AngularJs.",
            },{ 
                id:3,
                projectName:"Monitoring" ,
                technology: "Vue",
                details:"Vue. js Practice Project Ideas. QR Code Generator (Beginner) There's a cool little service, QRtag.net, that lets you generate QR codes on the fly without any kind of backend process",
            }
    
        ]

        eventBus.$emit('pickartisanlist',this.artisanList);
        
    }

}


</script>
<style scoped>

</style>