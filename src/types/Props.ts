export interface InputProps {
  placeHolder: string;
  mr?: string;
  ml?: string;
  mt?: string;
  mb?: string;
  onChangeHandler: (e: any) => void;
  hasError?: boolean;
}
