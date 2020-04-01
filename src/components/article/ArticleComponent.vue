<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"> <img :src="article.author.image" /> </a>
      <div class="info">
        <a href="" class="author">{{ article.author.username }}</a>
        <span class="date">January 20th</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <span href="" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';
import {Article} from '../../Models/ArticleModel';
@Component
export default class ArticleComponent extends Vue {
    @Prop() article?: Article;
    
}

</script>