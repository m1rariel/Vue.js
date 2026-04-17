import { useAxios } from "../useAxios";

export const getTodos = async () => {
  const axiosInstance = useAxios();
  try {
    const response = await axiosInstance.get("/todos?_limit=10");
    return response.data;
  } catch (e) {
    console.error("Error", e);
    return [];
  }
};
