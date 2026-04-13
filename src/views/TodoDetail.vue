<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import IconDone from "@/components/icons/IconDone.vue";

import IconTrash from "@/components/icons/IconTrash.vue";

const route = useRoute();
const todoTitle = computed(() => route.query.title || `Пусто :С`);
const todoID = computed(() => route.query.id || `Не найдено :С`);
const todoCheck = computed(() => route.query.check || `Не найдено :С`);
</script>

<template>
  <div class="content-page">
    <div class="content-page__container">
      <div class="content-page__header">
        <h2 class="content-page__title">{{ todoTitle }}</h2>
      </div>
      <ul class="content-page__list">
        <li class="content-page__item">
          Отметка о выполнении: {{ todoCheck }}
        </li>
        <li class="content-page__item">ID задачи: {{ todoID }}</li>
        <li class="content-page__item">
          <div class="content-page__item-group">
            <RouterLink to="/todo"> ⬅️ </RouterLink>
            <button @click="" class="content-page__done-button"><IconDone /></button>
            <button @click="onTodoDelete" class="content-page__delete-button"><IconTrash /></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.content-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
}
.content-page__container {
  width: 583px;
  padding: 25px;
  background: #1d1825;
  border-radius: 25px;
  margin-top: 100px;
}
ul {
  text-decoration: none;
  list-style: none;
  margin-block: 0;
  padding-inline: 0;
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
  font-family: "Inter", sans-serif;
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
button {
    margin-block: 0;
    padding-block: 0;
    background-color: transparent;
    border: none;
}
</style>
