<script setup>
import { ref } from "vue";

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
  <div class="todo_add_content">
    <input
      class="todo_add_content__input"
      v-model="title"
      type="text"
      placeholder="Add new a tasks"
    />
    <button class="todo_add_content__button" @click="onAddTodo">
      <img
        src="./components/icons/plus.svg"
        alt="Plus icon"
        width="24px"
        height="24px"
      />
    </button>
  </div>
</template>

<style scoped>
.todo_add_content__input {
  width: 381px;
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
.todo_add_content {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
 padding-bottom: 15px;
}
.todo_add_content__button {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 10px;
  background: rgba(158, 120, 207, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
}
.todo_add_content__button:hover {
  border-color: rgb(146, 94, 214);
}
.todo_add_content__button img {
  display: block;
  width: 24px;
  aspect-ratio: 1;
}

</style>
