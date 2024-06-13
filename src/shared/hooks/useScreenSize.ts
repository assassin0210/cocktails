import { useState, useEffect } from "react";

type ScreenSize = 0 | 1 | 2 | 3;

export const useScreenSize = (): ScreenSize => {
  const [size, setSize] = useState<ScreenSize>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 360) {
        setSize(0);
      } else if (width > 360 && width <= 768) {
        setSize(1);
      } else if (width > 769 && width <= 1024) {
        setSize(2);
      } else if (width > 1024) {
        setSize(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
