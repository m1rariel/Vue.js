import { getTodos } from "@/api/todo/getTodos";
import { getTodo } from "@/api/todo/getTodo";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);
  const isLoading = ref(true);
  const currentTodo = ref(null);
  const isDetailLoading = ref(true);
  function addTodo(title) {
    todos.value.push({
      id: Date.now(),
      title,
      completed: false,
    });
  }
  async function claimTodos() {
    isLoading.value = true;
    try {
      const rawTodos = await getTodos();
      todos.value = rawTodos.map((todo) => ({
        ...todo,
        completed: false,
      }));
    } catch (error) {
      console.error("Error!!!", error);
    } finally {
      isLoading.value = false;
    }
  }
  async function claimOneTodo(id) {
    isDetailLoading.value = true;
    try {
      currentTodo.value = await getTodo(id);
    } catch (error) {
      console.error("Error!", error);
      currentTodo.value = null;
    } finally {
      isDetailLoading.value = false;
    }
  }
  const doneTodos = computed(() => {
    return todos.value.filter((todo) => todo.completed);
  });

  const newTodos = computed(() => {
    return todos.value.filter((todo) => !todo.completed);
  });

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return {
    addTodo,
    claimTodos,
    doneTodos,
    newTodos,
    deleteTodo,
    isLoading,
    currentTodo,
    isDetailLoading,
    claimOneTodo,
  };
});
