export interface EmailError {
  hasError: boolean;
  messages: Array<string>;
  isEmail: boolean;
  isMessage: boolean;
  isName: boolean;
  isSubject: boolean;
}
