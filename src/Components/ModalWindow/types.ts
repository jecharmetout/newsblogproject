import { ReactNode } from "react";

export type ModalWindowProps = {
  active: boolean;
  closeModal: () => void;
  children: ReactNode;
  ispostModalVisible?: boolean;
  isImgModalVisible?: boolean;
};
