import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

export const useSmallWidth = (value: number): boolean => {
  const isSmallWindow = width.value < 1024;

  return isSmallWindow;
};
