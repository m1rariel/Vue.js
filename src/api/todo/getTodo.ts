import type { Todo } from "@/types/todo";
import { useAxios } from "../useAxios";

export const getTodo = async (id: number): Promise<Todo> => {
  const axiosInstance = useAxios();
  const response = await axiosInstance.get<Todo>(`/todos/${id}`);
  return response.data;
};
