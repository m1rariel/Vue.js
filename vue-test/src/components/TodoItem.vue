<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits([`deleteTodo`]);

const onTodoDelete = () => {
  emits(`deleteTodo`, props.todo.id);
};
</script>

<template>
  <div class="todo_content">
    <h2
      :class="[
        'todo_content__title',
        { todo_content__title_done: todo.completed },
      ]"
    >
      {{ todo.title }}
    </h2>
    <div class="todo_content_checkstatus">
      <label class="todo_checkbox">
        <input v-model="todo.completed" type="checkbox" />
        <span class="todo_checkbox__custom">
          <img
            v-if="todo.completed"
            src="./icons/done.svg"
            alt="Done todo"
            width="14"
            height="14"
          />
        </span>
      </label>
      <button class="todo_delete_button" @click="onTodoDelete">
        <img src="../icons/TrashSimple.svg" alt="trash icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.todo_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 630px;
  min-height: 75px;
  box-sizing: border-box;
  padding: 22px;
  border: 1px solid rgba(158, 120, 207, 1);
  border-radius: 10px;
  background: rgba(21, 16, 28, 1);
  gap: 15px;
}

.todo_content__title {
  margin: 0;
  color: rgba(158, 120, 207, 1);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
}

.todo_content__title_done {
  color: rgba(120, 207, 176, 1);
  text-decoration: line-through;
}

.todo_content_checkstatus {
  display: flex;
  align-items: center;
  gap: 18px;
}

.todo_checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.todo_checkbox input {
  display: none;
}

.todo_checkbox__custom {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid white;
  border-radius: 50%;
}

.todo_checkbox__custom img {
  display: block;
  width: 17px;
  height: 12px;
}

.todo_delete_button {
  border: 0;
  background: transparent;
  color: rgba(158, 120, 207, 1);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
