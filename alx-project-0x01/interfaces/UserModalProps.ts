import { UserData } from "./UserData";
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}