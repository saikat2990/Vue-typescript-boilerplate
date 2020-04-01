import {
 Module,
 VuexModule,
 getModule,
 MutationAction,
} from 'vuex-module-decorators';
import { GetterTree } from 'vuex';
import store from '@/store';
import {Todo} from "../../Models/TodoModel";
import * as api from '../../services/todoServices';
import global from '@/store/modules/global';


@Module({
    dynamic:true,
    namespaced:true,
    name:'todo',
    store,
})

class TodoModule extends VuexModule{
    todoList: Todo[]=[];
    newtodo: Todo | null = null;


    @MutationAction
    async refreshTodo() {
      const list = await api.getTodoList();
      global.state.globalTodoList= list;
      return {
        todoList: list,
      };
    }
  
    @MutationAction
    async addTodo(title: string) {
      const newtodo = await api.addTodoList(title)
      return { newtodo }
    }

    @MutationAction
    async deleteTodo(id: number) {
      await api.delFromTodoList(id);
      return { }
    }

    
}

export default getModule(TodoModule);