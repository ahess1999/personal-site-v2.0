import axios from "axios";
import Email from "../../types/Email";

export const sendEmail = async (email: Email) => {
  let response: Array<string> = [];
  await axios
    .post(process.env.REACT_APP_API_URL + "api/contact/email", email)
    .then((res) => {
      response = res.data;
    });

  return response;
};
