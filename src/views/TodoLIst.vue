<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Todoitem from "@/components/TodoItem.vue";
import TodoAddItem from "@/components/TodoAddItem.vue";
import { useRouter } from "vue-router";
import { useSmallWidth } from "@/composables/useWidth";
import { useTodosStore } from "@/store/todosStore";
import { storeToRefs } from "pinia";

const todosStore = useTodosStore();
const { isLoading, newTodos, doneTodos } = storeToRefs(todosStore);

const router = useRouter();

const navigateToDetail = (id) => {
  router.push({ path: `/todo/${id}` });
};
onMounted(() => {
  todosStore.claimTodos();
});

const isSmallWidth = useSmallWidth();
</script>

<template>
  <div v-if="isSmallWidth" class="todo-page__noticed">
    <p>Sorry, to small :c</p>
  </div>
  <div v-else class="todo-page">
    <h2 v-if="isLoading" class="loader"></h2>
    <div v-else class="todo-page__container">
      <TodoAddItem />
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
            @deleteTodo="todosStore.deleteTodo"
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
            @deleteTodo="todosStore.deleteTodo"
            @navigateToDetail="navigateToDetail"
            class="todo-section__item--completed"
          />
        </TransitionGroup>
      </section>
    </div>
  </div>
</template>

<style scoped>
.todo-page__noticed {
  color: red;
  font-size: 48px;
}
.loader {
  width: 70px;
  height: 30px;
  overflow: hidden;
  position: relative;
  margin: 0;
}
.loader:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  inset: 0;
  margin: auto;
  background: white;
  transform-origin: bottom;
  animation: l10-1 3s infinite;
}
.loader:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 14px;
  bottom: calc(50% - 4px);
  background: white;
  animation: l10-2 3s infinite;
}
@keyframes l10-1 {
  0%,
  10% {
    transform: translate(0) scale(1);
    box-shadow:
      60px 0,
      60px 0;
  }
  20%,
  40% {
    transform: translate(20px) scale(1);
    box-shadow:
      60px 0,
      60px 0;
  }
  48% {
    transform: translate(20px) scale(1);
    box-shadow:
      8px 0,
      60px 0;
  }
  50% {
    transform: translate(20px) scale(1.5);
    box-shadow:
      0 0,
      60px 0;
  }
  58% {
    transform: translate(20px) scale(1.5);
    box-shadow:
      0 0,
      8px 0;
  }
  60%,
  70% {
    transform: translate(20px) scale(2);
    box-shadow:
      0 0,
      0 0;
  }

  85% {
    transform: translate(-50px) scale(2);
    box-shadow:
      0 0,
      0 0;
  }
  87% {
    transform: translate(-50px) scale(1);
    box-shadow:
      0 0,
      0 0;
  }
  100% {
    transform: translate(0) scale(1);
    box-shadow:
      0 0,
      0 0;
  }
}
@keyframes l10-2 {
  20%,
  70% {
    left: 50%;
  }
  0%,
  10%,
  85%,
  100% {
    left: -25px;
  }
}
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
