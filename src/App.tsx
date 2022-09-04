import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TitlePage from "./pages/TitlePage";
import SideNav from "./components/SideNav/SideNav";
import Particle from "./components/Particle";
import SettingsContextProvider from "./context/SettingsContextProvider";
import About from "./pages/About";
import useScreenWatch from "./hooks/useScreenWatch";
import Resume from "./pages/Resume";
import NavigationIcon from "./components/NavigationIcon";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export const App: React.FC = () => {
  const { smallScreen, mediumScreen } = useScreenWatch();
  const [translateX, setTranslateX] = React.useState<string>("0");
  const [isSideNavOpen, setIsSideNavOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (smallScreen || mediumScreen) {
      setTranslateX("-100");
    } else {
      setTranslateX("0");
      setIsSideNavOpen(false);
    }
  }, [smallScreen, mediumScreen]);

  const handleIconClick = (sideNavOpen: boolean, translate: string): void => {
    setIsSideNavOpen(sideNavOpen);
    setTranslateX(translate);
  };

  return (
    <ChakraProvider>
      <SettingsContextProvider>
        <BrowserRouter>
          <SideNav
            translateX={translateX}
            isSideNavOpen={isSideNavOpen}
            handleIconClick={handleIconClick}
            smallScreen={smallScreen || mediumScreen}
          />
          <Particle smallScreen={smallScreen || mediumScreen}>
            {smallScreen || mediumScreen ? (
              <NavigationIcon handleIconClick={handleIconClick} />
            ) : null}
            <Routes>
              <Route path="/" element={<TitlePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Particle>
        </BrowserRouter>
      </SettingsContextProvider>
    </ChakraProvider>
  );
};
