<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Todoitem from "@/components/TodoItem.vue";
import TodoAddItem from "@/components/TodoAddItem.vue";
import { useRouter } from "vue-router";
import { getTodos } from "@/api/todo/getTodos";

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
const router = useRouter();
const navigateToDetail = (id) => {
  router.push({ path: `/todo/${id}` });
};
onMounted(async () => {
  const rawTodos = await getTodos();
  todos.value = rawTodos.map((todo) => ({
    ...todo,
    completed: false,
  }));
});
</script>

<template>
  <div class="todo-page">
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
            @navigateToDetail="navigateToDetail"
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
            @navigateToDetail="navigateToDetail"
            class="todo-section__item--completed"
          />
        </TransitionGroup>
      </section>
    </div>
  </div>
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
  background: #1d1825;
  border-radius: 25px;
  margin-top: 100px;
}

.todo-section {
  display: flex;
  flex-direction: column;
}

.todo-section__item--completed {
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
.todo-move,
.todo-section__item--completed-enter-active,
.todo-section__item--completed-leave-active,
.todo-section__item--completed-move {
  transition-duration: 0.5s;
  transform: translate(50% 50%);
  transform: rotateY(360deg);
}
.todo-enter-active {
  transition:
    transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 450ms ease;
}

.todo-enter-from {
  opacity: 0;
  transform: translateY(-90px) scale(1);
}

.todo-enter-active {
  transition:
    transform 2s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 450ms ease;
}

.todo-enter-from {
  opacity: 0;
  transform: translateY(-90px) scale(0.96);
}

.todo-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.todo-move {
  transition: transform 350ms ease;
}

.todo-section__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
