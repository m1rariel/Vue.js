import { useAxios } from "../useAxios";

export const getTodo = async (id) => {
  const axiosInstance = useAxios();
  try {
    const response = await axiosInstance.get(`/todos/${id}`);
    return response.data;
  } catch (e) {
    console.error("Error", e);
    return [];
  }
};
