<script setup>
import { computed, ref, watch } from "vue";
import Todoitem from "./components/TodoItem.vue";
import TodoAddItem from "./components/TodoAddItem.vue";

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

</script>

<template>
  <main class="todo-page">
    <div class="todo-page__container">

      <TodoAddItem @addTodo="addTodo" />
      <section class="todo-section">
        <h2 v-if="newTodos.length > 0" class="todo-section__title">
          Task to do - {{ newTodos.length }}
        </h2>
        <h2 v-else>Ничего не найдено...</h2>
        <TransitionGroup name="todo" tag="div" class="todo-section__list">
          <Todoitem
            v-for="todo in newTodos"
            :key="todo.id"
            :todo="todo"
            @deleteTodo="deleteTodo"
          />
        </TransitionGroup>
      </section>

      <section class="todo-section">
        <h2 v-if="doneTodos.length > 0" class="todo-section__title">
          Done - {{ doneTodos.length }}
        </h2>
        <h2 v-else>Ничего не найдено...</h2>
        <TransitionGroup name="todo" tag="div" class="todo-section__list">
          <Todoitem
            v-for="todo in doneTodos"
            :key="todo.id"
            :todo="todo"
            @deleteTodo="deleteTodo"
            class="todo-item--completed"
          />
        </TransitionGroup>
      </section>

    </div>
  </main>
</template>

<style scoped>
.todo-page {
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}
.todo-page__container {
  width: 583px;
  padding: 65px;
  background: #1D1825;
  border-radius: 25px;
  margin-top: 100px;
}

.todo-section {
  display: flex;
  flex-direction: column;
}

.todo-item--completed {
  color: rgba(120, 207, 176, 1) !important;
}

.todo-section__title {
  margin: 0;
  margin-top: 60px;
  margin-bottom: 15px;
}

h2 {
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}

.todo-enter-active,
.todo-leave-active,
.todo-move {
  transition-duration: 0.5s;
}

.todo-section__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
