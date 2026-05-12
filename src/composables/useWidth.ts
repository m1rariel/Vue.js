import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

export const useSmallWidth = (breakpoint = 1024): boolean => {
  const isSmallWindow = width.value < 1024;

  return isSmallWindow;
};
