<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import IconDone from "@/components/icons/IconDone.vue";

import IconTrash from "@/components/icons/IconTrash.vue";

const route = useRoute();
const todo = computed(() => ({
  title: route.query.title || "Пусто :С",
  id: route.query.id || "Не найдено :С",
  checked: route.query.check || "Не найдено :С",
}));

const todoCheck = computed(() => {
  return route.query.check ? "Выполнено!" : "Работай дальше!";
});
</script>

<template>
  <div class="content-page">
    <div class="content-page__container">
      <div class="content-page__header">
        <h2 class="content-page__title">{{ todo.title }}</h2>
      </div>
      <ul class="content-page__list">
        <li
          class="content-page__item-info"
          :class="{
            'content-page-item--done': todoCheck === 'Выполнено!',
            'content-page-item--todo':
              todoCheck === 'Работай дальше!' || todoCheck === 'Не найдено :С',
          }"
        >
          Отметка о выполнении: {{ todo.checked }}
        </li>
        <li class="content-page__item-info">ID задачи: {{ todo.id }}</li>
        <li class="content-page__item-info content-page__item-group">
          <RouterLink to="/todo"> ⬅️ </RouterLink>
          <button class="content-page__done-button">
            <IconDone />
          </button>
          <button class="content-page__delete-button">
            <IconTrash />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.content-page-item--done {
  color: green;
}
.content-page-item--todo {
  color: red;
}

.content-page__container {
  width: 583px;
  padding: 25px;
  background: #1d1825;
  border-radius: 25px;
  margin-top: 100px;
}

.content-page__header {
  max-width: 100%;
  border: 1px solid #53426d;
  border-radius: 99px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(158, 120, 207, 1);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
}
.content-page__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: rgb(162, 117, 220);
  margin-top: 30px;
}
.content-page__item-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 583px;
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
