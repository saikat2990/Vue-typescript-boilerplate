<template>
  <div class="article-preview"> 
      <h3>Add Todo</h3>
      <div class="add">
        <form @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add Todo...">
            <input type="submit" value="Submit">
        </form>
      </div>
      <br/>
    <div>
        <div v-for="todo in todoList" :key="todo.id"  class="article-meta">
          {{todo.title}}
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alts "><button class="del">x</button></i>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';
import {Todo} from '../../Models/TodoModel';
import todo from '../../store/modules/todo';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
@Component
export default class TodoComponent extends Vue {
    @Prop() todoList?: Todo[];
    @Getter globalGetter: any;
    @Getter globalList: any;
    @Getter globalTodoList: Todo[];

    title: "";
    data(){
      return{
        title: "",
      }
    }
    newtodo: Todo | null;   
    async onSubmit(e:any){
      await todo.addTodo(this.title);
      console.log("hey");
      console.log("hey new "+this.globalGetter+" "+this.globalList+ " "+ this.globalTodoList);
      console.log(todo.newtodo);
      this.newtodo = todo.newtodo;
      this.todoList.unshift(this.newtodo); 
    }
    async deleteTodo(id){
      todo.deleteTodo(id);
      this.todoList = this.todoList.filter(todo=>todo.id!==id);
    }
}
</script>
<style scoped>

  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
  .is-complete {
    background: #35495e;
    color: #fff;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }

  .del {
    color: #ff0000;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }

</style>