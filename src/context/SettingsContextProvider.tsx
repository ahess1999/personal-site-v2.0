import React from "react";
import useScreenLayout from "../hooks/useScreenLayout";
import { Settings } from "../types/Context/Settings";
import SettingsContext from "./SettingsContext";

type SettingsContextProviderProps = {
  children?: React.ReactNode;
};

const SettingsContextProvider: React.FC<SettingsContextProviderProps> = ({
  children,
}) => {
  const { isMobile } = useScreenLayout();

  const settings: Settings = {
    isMobile: isMobile,
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
