<template>
    <html>
        <head>
            <meta charset="utf8">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        </head>
        <body>
            <div class="container" style="margin-top: 15px; margin-bottom: 15px;">
                <div class="row">
                <div class="col-lg-12">
                    <TodoStat title="All Todos">{{allTodosCount}}</TodoStat>
                    <TodoStat title="Completed Todos">{{completedCount}}</TodoStat>
                    <TodoStat title="Pending Todos">{{pendingTodosCount}}</TodoStat>
                    <TodoItem v-for="(todo, index) in todos" v-bind:key="todo.id" 
                        :completed="todo.completed" @toggle="toggle(index)">
                        {{todo.title}}
                    </TodoItem>
                </div>
                </div>
            </div>
        </body>>
    </html>
</template>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import axios from 'axios';
import TodoItem from './components/TodoItem.vue';
import TodoStat from './components/TodoStat.vue';

export default {
  components: { TodoItem, TodoStat },
    name: "Todos",
    data: function(){
        return {
            todos: []
        }
    },
    computed: {
        allTodosCount(){
            return this.todos.length
        },
        completedCount(){
            return this.todos.filter(function(todo){return todo.completed}).length
        },
        pendingTodosCount(){
            return this.todos.filter(function(todo){return !todo.completed}).length
        }
    },
    methods:{
        toggle(index){
            this.todos[index].completed = !this.todos[index].completed
        }
    },
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
            console.log(response.data)
            this.todos = response.data
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>