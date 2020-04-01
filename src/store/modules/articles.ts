import {
    Module,
    VuexModule,
    getModule,
    MutationAction,
    Mutation,
    Action,
   } from 'vuex-module-decorators';
   

import { Article } from '@/Models/ArticleModel';
import * as api from '../../services/articleServices';
import store from '../../store';
@Module({
  dynamic:true,
  namespaced:true,
  name:'articles',
  store,
})


class ArticleModule extends VuexModule{
    feed: Article[] = [];
    
    @MutationAction
    async refreshFeed() {
      const globalFeed = await api.getGlobalFeed();
      return {
        feed: globalFeed.articles,
      };
    }
}

export default getModule(ArticleModule);