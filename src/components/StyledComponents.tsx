import styled from "@emotion/styled";

export const StyledContainer = styled("div")((styling: any) => styling.styling);

export const BlackLine = styled("div")(({ width, color }: any) => ({
  borderBottom: "1px solid " + color,
  width: width,
}));
