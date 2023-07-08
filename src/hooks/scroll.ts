import { useState, useCallback, useEffect, useMemo, MouseEvent } from "react";

export const useScroll = () => {
  const [verticalScrollInPixels, setVerticalScrollInPixels] = useState(window.scrollY);

  const isScrolling = useMemo(() => {
    const thresholdInPixels = 40;
    return verticalScrollInPixels - thresholdInPixels > 0;
  }, [verticalScrollInPixels]);

  const smoothScrollToTop = useCallback((event: MouseEvent) => {
    if (verticalScrollInPixels > 0) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [verticalScrollInPixels]);

  useEffect(() => {
    const onScroll = () => {
      setVerticalScrollInPixels(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    verticalScrollInPixels,
    isScrolling,
    smoothScrollToTop,
  };
};
