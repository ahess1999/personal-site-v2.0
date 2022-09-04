import { useState, useEffect } from "react";

const useScreenWatch = () => {
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const [mediumScreen, setMediumScreen] = useState<boolean>(false);
  const [aboutScreenChange, setAboutScreenChange] = useState<boolean>(false);

  const handleWindowSizeChange = () => {
    const smallScreen: boolean = window.innerWidth < 550;
    const mediumScreen: boolean =
      window.innerWidth < 1000 && window.innerWidth >= 550;
    const aboutScreenChange: boolean = window.innerWidth < 1550;
    setSmallScreen(smallScreen);
    setMediumScreen(mediumScreen);
    setAboutScreenChange(aboutScreenChange);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    const smallScreen: boolean = window.innerWidth < 550;
    const mediumScreen: boolean =
      window.innerWidth < 900 && window.innerWidth >= 550;
    const aboutScreenChange: boolean = window.innerWidth < 1550;
    setSmallScreen(smallScreen);
    setMediumScreen(mediumScreen);
    setAboutScreenChange(aboutScreenChange);
  }, []);

  return { smallScreen, mediumScreen, aboutScreenChange };
};

export default useScreenWatch;
