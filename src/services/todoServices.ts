import axios from 'axios'

export async function getTodoList() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos');
    return response.data;
}

export async function addTodoList(title: string){
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos'
            ,{title,completed:false}

    );
    return response.data;
}

export async function delFromTodoList(id: number){
    await axios.delete( `https://jsonplaceholder.typicode.com/todos/${id}`);
   
}