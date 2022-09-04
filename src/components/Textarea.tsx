import React from "react";
import { Textarea as ChakraTextarea } from "@chakra-ui/react";
import { InputProps } from "../types/Props";
import { PRIMARY, SECONDARY } from "../utils/constants/Theme";

const Textarea: React.FC<InputProps> = ({
  placeHolder,
  onChangeHandler,
  mr,
  ml,
  mt,
  mb,
  hasError,
}) => {
  return (
    <ChakraTextarea
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      placeholder={placeHolder}
      size="lg"
      h="190px"
      resize="none"
      _placeholder={{ opacity: 1, color: PRIMARY }}
      focusBorderColor={PRIMARY}
      borderColor={SECONDARY}
      onChange={onChangeHandler}
      isInvalid={hasError}
    />
  );
};

export default Textarea;
