import { createContext } from "react";
import { Settings } from "../types/Context/Settings";

const defaultContext: Settings = {
  isMobile: false,
};

const SettingsContext: React.Context<Settings> = createContext(defaultContext);

export default SettingsContext;
