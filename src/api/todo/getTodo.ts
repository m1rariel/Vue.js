import type { Todo } from "@/types/todo";
import { useAxios } from "../useAxios";

export const getTodo = async (id: number) => {
  const axiosInstance = useAxios();
  const response = await axiosInstance.get<Todo>(`/todos/${id}`);
  return response.data;
};
