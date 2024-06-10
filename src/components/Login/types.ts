import { UserInputDto } from "../../services/Auth/types";

export type LoginProps = {
  login: (loginObj: UserInputDto) => Promise<void>;
};

export type FormData = {
  email: string;
  password: string;
};
