import { getTodos } from "@/api/todo/getTodos";
import { getTodo } from "@/api/todo/getTodo";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { Todo } from "@/types/todo";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([]);
  const isLoading = ref(true);
  const currentTodo = ref<Todo | null>(null);
  const isDetailLoading = ref(true);

  function addTodo(title: string): void {
    todos.value.push({
      id: Date.now(),
      title,
      completed: false,
    });
  }

  async function fetchTodos(): Promise<void> {
    isLoading.value = true;

    try {
      const rawTodos: Todo[] = await getTodos();
      todos.value = rawTodos.map((todo) => ({
        ...todo,
        completed: false,
      }));
    } catch (error: unknown) {
      console.error("Error!!!", error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchOneTodo(id: number): Promise<void> {
    isDetailLoading.value = true;
    try {
      currentTodo.value = await getTodo(id);
    } catch (error: unknown) {
      console.error("Error!", error);
      currentTodo.value = null;
    } finally {
      isDetailLoading.value = false;
    }
  }

  const doneTodos = computed<Todo[]>(() => {
    return todos.value.filter((todo) => todo.completed);
  });
  const newTodos = computed<Todo[]>(() => {
    return todos.value.filter((todo) => !todo.completed);
  });

  const deleteTodo = (id: number): void => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return {
    addTodo,
    fetchTodos,
    doneTodos,
    newTodos,
    deleteTodo,
    isLoading,
    currentTodo,
    isDetailLoading,
    fetchOneTodo,
  };
});
