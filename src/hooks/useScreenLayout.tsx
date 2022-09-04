import { useState, useEffect } from "react";

const useScreenLayout = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleWindowSizeChange = () => {
    const userAgent: string =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobileCheck: boolean = Boolean(
      userAgent.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    );
    const smallScreen: boolean = window.innerWidth < 900;
    setIsMobile(mobileCheck || smallScreen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    const userAgent: string =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobileCheck: boolean = Boolean(
      userAgent.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    );
    const smallScreen: boolean = window.innerWidth < 900;
    setIsMobile(mobileCheck || smallScreen);
  }, []);

  return { isMobile };
};

export default useScreenLayout;
