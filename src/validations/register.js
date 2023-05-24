import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required().label("Email"),
  password: yup.string().required().label("Password"),
});
