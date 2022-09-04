import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { PRIMARY, SECONDARY } from "../utils/constants/Theme";
import { InputProps } from "../types/Props";

const Input: React.FC<InputProps> = ({
  placeHolder,
  onChangeHandler,
  mr,
  ml,
  mt,
  mb,
  hasError,
}) => {
  return (
    <ChakraInput
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      placeholder={placeHolder}
      size="lg"
      _placeholder={{ opacity: 1, color: PRIMARY }}
      focusBorderColor={PRIMARY}
      borderColor={SECONDARY}
      onChange={onChangeHandler}
      isInvalid={hasError}
    />
  );
};

export default Input;
