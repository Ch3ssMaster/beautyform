import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { BackDrop, SuccessModal, CloseModal } from "../../styled/styled";

const SignInModal = (props) => {
  const closeModalHandler = () => {
    console.log("running!");
    setActiveClass("");
    setCloseClass("close");
  };
  const [activeClass, setActiveClass] = useState("");
  const [closeClass, setCloseClass] = useState("");

  useEffect(() => {
    if (props.active && closeClass === "") {
      setActiveClass("active");
      setCloseClass("");
    } else {
      const timer = setTimeout(() => {
        props.onShow(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [props.active, closeClass]);

  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDom.createPortal(
        <SuccessModal className={activeClass}>
          <CloseModal
            onClick={closeModalHandler}
            size="40"
            title="Close modal window"
          />
          <p>Your form was successfully submited!</p>
        </SuccessModal>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default SignInModal;
