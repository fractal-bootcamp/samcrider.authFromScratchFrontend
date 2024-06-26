import { UserInputDto } from "../../services/Auth/types";

export type SignupProps = {
  signup: (signupObj: UserInputDto) => Promise<void>;
};

export type FormData = {
  email: string;
  password: string;
};
