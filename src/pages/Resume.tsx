import { Center } from "@chakra-ui/react";
import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import useScreenWatch from "../hooks/useScreenWatch";

const Resume: React.FC = () => {
  const { smallScreen, mediumScreen } = useScreenWatch();

  const getResumeWidth = (): number => {
    if (mediumScreen || smallScreen) {
      if (smallScreen) {
        return 350;
      }
      return 500;
    }
    return 625;
  };

  return (
    <Center bg="#1f2833" h="100vh">
      <Document file="/AustinHessResume.pdf">
        <Page pageNumber={1} width={getResumeWidth()} />
      </Document>
    </Center>
  );
};

export default Resume;
