import React from "react";
import { closeModalHandler } from "./SignInModal";
import { BackDrop, SuccessModal, CloseModal } from "../../styled/styled";

export default {
  title: "SuccessModal",
  component: SuccessModal,
};

export const Default = () => (
  <React.Fragment>
    <BackDrop />
    <SuccessModal className="">
      <CloseModal
        onClick={closeModalHandler}
        size="40"
        title="Close modal window"
      />
      <p>Your form was successfully submited!</p>
    </SuccessModal>
  </React.Fragment>
);

export const Active = () => (
  <React.Fragment>
    <BackDrop />
    <SuccessModal className="active">
      <CloseModal
        onClick={closeModalHandler}
        size="40"
        title="Close modal window"
      />
      <p>Your form was successfully submited!</p>
    </SuccessModal>
  </React.Fragment>
);
export const Close = () => (
  <React.Fragment>
    <BackDrop />
    <SuccessModal className="close">
      <CloseModal
        onClick={closeModalHandler}
        size="40"
        title="Close modal window"
      />
      <p>Your form was successfully submited!</p>
    </SuccessModal>
  </React.Fragment>
);
