import { useAxios } from "../useAxios";

export const getTodos = async () => {
  const axiosInstance = useAxios();
  const response = await axiosInstance.get("/todos", {
    params: { _limit: 10 },
  });
  return response.data;
};
