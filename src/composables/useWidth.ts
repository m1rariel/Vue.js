import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

export const useSmallWidth = (_breakpoint = 1024) => {
  const isSmallWindow = width.value < 1024;

  return isSmallWindow;
};
