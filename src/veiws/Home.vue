<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Team Artisan</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <span class="nav-link" href="" @mouseover="todoShow">Todo List</span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="" @mouseover="globalFeedShow">Global Feed</span>
              </li>
            </ul>
          </div>
          <div v-if="globalFeed">
              <ArticleComponent 
                v-for="article in feed"
                :article="article"
                :key="article.slug"
              ></ArticleComponent>
          </div>

          <div v-if="todoTag">
              <TodoComponent 
                v-bind:todoList="todoList"
              ></TodoComponent>
          </div>
        
        </div>

        <div class="col-md-3">

          <div class="sidebar">
            <p>Learning Technology</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">ASP.NET</a>
              <a href="" class="tag-pill tag-default">Vue.js</a>
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">Unity</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div>
          </div>
          <br/>
          <AddvertiseComponent></AddvertiseComponent>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ArticleComponent from '../components/article/ArticleComponent.vue';
import TodoComponent from '../components/todo/todoComponent.vue';
import articles from '../store/modules/articles';
import todo from '../store/modules/todo';
import {Todo} from '../Models/TodoModel';
import AddvertiseComponent from '../components/addvertise/addvertiseComponent.vue';
import eventBus from '../plugins/eventBus';


@Component({
  components: {
    ArticleComponent,
    TodoComponent,
    AddvertiseComponent
  },
})

export default class Home extends Vue {

  globalFeed = false;
  todoTag =false;
  result: any;
  


  globalFeedShow(){
    this.globalFeed = true;
    this.todoTag = false;
  }

  todoShow(){
    this.globalFeed = false;
     this.todoTag = true;
  }

  get feed() {
    return articles.feed;
  }

  get todoList(){
    return todo.todoList;
  }


  async created() {
    await articles.refreshFeed();
    await todo.refreshTodo();
    this.globalFeed= false;
    this.todoTag= true;
    eventBus.$emit('feed_number',articles.feed.length);
    eventBus.$emit('total_todo_number',todo.todoList.length);
  }
}
</script>
