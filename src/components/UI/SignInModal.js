import React from "react";
import ReactDom from "react-dom";
import { BackDrop, SuccessModal, CloseModal } from "../../styled/styled";

const SignInModal = (props) => {
  const closeModalHandler = () => {
    props.onShow(false);
  };

  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {
        ReactDom.createPortal(
          <SuccessModal active={props.active}>
            <CloseModal
              onClick={closeModalHandler}
              size="40"
              title="Close modal window"
            />
            <p>Your form was successfully submited!</p>
          </SuccessModal>
        ,
        document.getElementById("overlay"))
      }
    </React.Fragment>
  );
};

export default SignInModal;
