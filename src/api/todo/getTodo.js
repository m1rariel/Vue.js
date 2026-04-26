import { useAxios } from "../useAxios";

export const getTodo = async (id) => {
  const axiosInstance = useAxios();
  const response = await axiosInstance.get(`/todos/${id}`);
  return response.data;
};
