import { TextInput } from "./../../utils/Regex";
import Email from "../../types/Email";
import { EmailError } from "../../types/Errors";
import { EmailRegex } from "../../utils/Regex";

export const validateEmail = (email: Email): EmailError => {
  let error: EmailError = {
    hasError: false,
    isEmail: false,
    isMessage: false,
    isName: false,
    isSubject: false,
    messages: new Array<string>(),
  };
  if (email.email === "") {
    error.isEmail = true;
    error.hasError = true;
    error.messages.push("Email cannot be empty");
  } else if (!email.email.toLowerCase().match(EmailRegex)) {
    error.isEmail = true;
    error.hasError = true;
    error.messages.push("Email is not valid");
  }

  if (!email.name.match(TextInput)) {
    error.hasError = true;
    error.isName = true;
    error.messages.push("Name is invalid");
  }

  if (!email.subject.match(TextInput)) {
    error.hasError = true;
    error.isSubject = true;
    error.messages.push("Subject is invalid");
  }

  if (email.message === "") {
    error.isMessage = true;
    error.hasError = true;
    error.messages.push("Message cannot be empty");
  } else if (!email.message.match(TextInput)) {
    error.isMessage = true;
    error.hasError = true;
    error.messages.push("Message is not valid");
  }

  return error;
};
