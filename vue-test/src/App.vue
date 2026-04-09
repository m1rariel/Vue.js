<script setup>
import { computed, ref, watch } from "vue";
import Todoitem from "./components/TodoItem.vue";
import TodoAddItem from "./TodoAddItem.vue";

const todos = ref([
  {
    id: 1,
    title: "Купить хлеб и изучить Vue.js",
    completed: false,
  },
  {
    id: 2,
    title: "Купить хлеб и изучить Vue.js",
    completed: false,
  },
  {
    id: 3,
    title: "Купить хлеб и изучить Vue.js",
    completed: false,
  },
  {
    id: 4,
    title: "Купить хлеб и изучить Vue.js",
    completed: false,
  },
  {
    id: 5,
    title: "To study React fundamentals",
    completed: true,
  },
]);

watch(
  todos,
  () => {
    console.log(todos.value);
  },
  { deep: true },
);

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

const doneTodos = computed(() => {
  return todos.value.filter((todo) => todo.completed);
});

const newTodos = computed(() => {
  return todos.value.filter((todo) => !todo.completed);
});

const addTodo = (title) => {
  todos.value.push({
    id: Date.now(),
    title,
    completed: false,
  });
};

/*
const quality = doneTodos.value.length;
const isEmpty = quality === 0;
*/
</script>

<template>
  <main class="content_page">
    <div class="container">
      <TodoAddItem @addTodo="addTodo" />
      <div class="todo_newTodo">
        <h2 v-if="doneTodos.length > 0" class="h2_todo_new__title">
          Task to do - {{ newTodos.length }}
        </h2>
        <h2 v-else>Ничего не найдено...</h2>
        <Todoitem
          v-for="todo in newTodos"
          :key="todo.id"
          :todo="todo"
          @deleteTodo="deleteTodo"
        />
      </div>

      <div class="todo_done">
        <h2 v-if="doneTodos.length > 0" class="h2_todo_done__title">
          Done - {{ doneTodos.length }}
        </h2>
        <h2 v-else>Ничего не найдено...</h2>
        <Todoitem
          v-for="todo in doneTodos"
          :key="todo.id"
          :todo="todo"
          @deleteTodo="deleteTodo"
          class="doneTodos__list"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.todo_newTodo {
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 15px;
  flex-direction: column;
}
.doneTodos__list {
  color: rgba(120, 207, 176, 1) !important;
}
.h2_todo_done__title {
  padding-block: 15px;
}
.content_page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  padding: 65px;
  background: #1d1825;
  border-radius: 25px;
  margin-top: 100px;
}
h2 {
  color: rgba(255, 255, 255, 1);

  font-family: "Inter";

  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}
</style>
