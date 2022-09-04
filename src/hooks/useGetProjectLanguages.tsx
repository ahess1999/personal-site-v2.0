import { useState, useEffect } from "react";
import { Languages } from "../types/Project";

const useGetProjectLanguages = (languages: Languages) => {
  const [projectLanguges, setProjectLanguages] = useState<Array<string>>(
    new Array<string>()
  );

  const getLanguages = (languages: Languages) => {
    let languageElements = [];

    if (languages["C#"] > 0) languageElements.push("C#");
    if (languages.TypeScript > 0) languageElements.push("TypeScript");
    if (languages.JavaScript > 0) languageElements.push("JavaScript");
    if (languages.Java > 0) languageElements.push("Java");
    if (languages.Python > 0) languageElements.push("Python");
    if (languages.HTML > 0) languageElements.push("HTML");
    if (languages.CSS > 0) languageElements.push("CSS");
    if (languages.C > 0) languageElements.push("C");

    setProjectLanguages(languageElements);
  };

  useEffect(() => {
    getLanguages(languages);
  }, [languages]);

  return { projectLanguges };
};

export default useGetProjectLanguages;
