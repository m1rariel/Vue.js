<script setup>
import { ref } from "vue";
import IconPlus from "./icons/IconPlus.vue";

const emits = defineEmits([`addTodo`]);
const title = ref(``);

const onAddTodo = () => {
  const value = title.value.trim();
  if (!value) return;
  emits(`addTodo`, value);
  title.value = "";
};
</script>

<template>
  <label for="todo-form__number" class="visually-hidden">Add a task</label>
  <form id="todo-form__number" class="todo-form" @submit.prevent="onAddTodo">
    <input
      v-model="title"
      class="todo-form__input"
      placeholder="Add new a tasks"
      type="text"
    />
    <button type="submit" class="todo-form__button" @submit="onAddTodo">
      <IconPlus />
    </button>
  </form>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
}

.todo-form__input {
  flex: 1;
  min-width: 0;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid rgba(158, 120, 207, 1);
  border-radius: 10px;
  background-color: transparent;
  padding: 10px 15px;

  color: rgba(119, 119, 119, 1);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}

.todo-form {
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
}

.todo-form__button {
  flex-shrink: 0;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 10px;
  background: rgba(158, 120, 207, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding: 0;
}

.todo-form__button:hover {
  border-color: rgb(146, 94, 214);
}

.todo-form__button :deep(svg) {
  display: block;
  width: 24px;
  height: 24px;
}

</style>
