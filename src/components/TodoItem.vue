<script setup>
import { computed } from "vue";
import IconDone from "./icons/IconDone.vue";
import IconTrash from "./icons/IconTrash.vue";
import { useTodosStore } from "@/store/todosStore";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits([`navigateToDetail`]);
const onNavigateToDetail = (id) => {
  emits(`navigateToDetail`, props.todo.id);
};

const todosStore = useTodosStore();

const todoLink = computed(() => ({
  path: `/todo/${props.todo.id}`,
  query: {
    title: props.todo.title,
    id: props.todo.id,
    completed: props.todo.completed,
  },
}));
</script>

<template>
  <div class="todo-item">
    <RouterLink :to="todoLink" :class="'todo-item__title'">
      {{ todo.title }}
    </RouterLink>
    <div class="todo-item__actions">
      <label class="todo-item__checkbox">
        <input v-model="todo.completed" type="checkbox" />
        <span class="todo-item__checkbox-control">
          <IconDone />
        </span>
      </label>
      <button
        class="todo-item__delete-button"
        @click="todosStore.deleteTodo(todo.id)"
      >
        <IconTrash />
      </button>
      <button class="todo-item__next-button" @click="onNavigateToDetail">
        ➡️
      </button>
    </div>
  </div>
</template>

<style scoped>
.todo-item__next-button {
  margin-block: 0;
  padding-block: 0;
  background-color: transparent;
  border: none;
  font-size: 16px;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 630px;
  min-height: 75px;
  box-sizing: border-box;
  padding: 22px;
  border-radius: 10px;
  background: rgba(21, 16, 28, 1);
  gap: 15px;
}

.todo-item__title {
  margin: 0;
  color: rgba(158, 120, 207, 1);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
}

.todo-item__title--done {
  color: rgba(120, 207, 176, 1);
  text-decoration: line-through;
}

.todo-item__actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.todo-item__checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 10px;
}

.todo-item__checkbox input {
  display: none;
}

.todo-item__checkbox-control {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 49%;
}

.todo-item__checkbox-control :deep(svg) {
  display: block;
  width: 17px;
  height: 12px;
}

.todo-item__delete-button {
  border: 0;
  background: transparent;
  color: rgba(158, 120, 207, 1);
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-item__delete-button :deep(svg) {
  display: block;
  width: 22px;
  height: 22px;
}
</style>
