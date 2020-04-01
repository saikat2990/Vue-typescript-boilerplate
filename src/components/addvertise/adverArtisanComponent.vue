<template>
    <div class="sidebar">
          <p>Our Projects</p>
        <div class="article-preview">
            <div v-for="artisan in artisanlist" :key="artisan.id">
                <div class="sidebar">
                    Project: {{artisan.projectName}}  
                    <p>Tech: {{artisan.technology}}</p>
                    <a>
                        <img @click="$emit('detailshow',artisan.id)" src="../../assets/readmore.png" style="width:40px; height:40px"/>
                        ...........
                    </a>
                </div> 
                <br/>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop} from 'vue-property-decorator';
import { Artisan} from '../../Models/ArtisanModel';
import eventBus from '../../plugins/eventBus';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
@Component
export default class AdverArtisanComponent extends Vue{
    @Prop() artisanlist?: Artisan[];
}
</script>
<style scoped>

</style>
