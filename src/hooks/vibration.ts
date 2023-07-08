import { useCallback } from "react";

export const useVibrationOf = (duration: number) => {
  const withVibration = useCallback((callback: Function) => (...parameters: Array<any>) => {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(duration);
    }

    callback(...parameters);
  }, []);

  return { withVibration };
};
