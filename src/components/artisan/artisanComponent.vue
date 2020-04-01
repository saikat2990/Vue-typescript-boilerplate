<template>
      <div class="sidebar">
          <p>Project details</p>
        <div class="article-preview">
             <div v-for="artisan in artisanListData" :key="artisan.id">
                <div class="sidebar" v-if="artisan.id==artId">
                    Project: {{artisan.projectName}}  
                    <p>Tech: {{artisan.technology}}</p>
                    <p>
                        {{artisan.details}}
                    </p>
                </div> 
                <br/>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop} from 'vue-property-decorator';
import eventBus from '../../plugins/eventBus';
import {Artisan,ArtisanDisplay} from '../../Models/ArtisanModel';
import global from '../../store/modules/global';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'


@Component
export default class ArtisanComponent extends Vue {
    accessKeyId: number;
    accessKeyTag: boolean;
    artisanLists:  Artisan[];
    @Getter artisanListData: Artisan[];
    artId: number;

    async created(){
        
        this.artId= Number(this. $route.params.id);
        //  eventBus.$on('pickartisanlist',(artisanList)=>{
        //     this.artisanLists = artisanList;
        //     console.log(this.artisanLists);
        // }) 
        this.accessKeyTag = true;
        this.artisanLists = this.artisanListData;
        console.log(this.artisanLists);
        eventBus.$on('detailshowaAccess',(content)=>{
            this.accessKeyId = content.id;
            this.accessKeyTag = content.access;
        })

    }
}

</script>