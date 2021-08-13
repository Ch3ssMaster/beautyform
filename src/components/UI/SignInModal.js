import React, { useState, useEffect, useCallback } from "react";
import ReactDom from "react-dom";
import { BackDrop, SuccessModal, CloseModal } from "../../styled/styled";

const SignInModal = (props) => {
  const [activeClass, setActiveClass] = useState(props.active);
  const [closeClass, setCloseClass] = useState("");
  
  const closeModalHandler = useCallback(() => {
    setActiveClass("");
    setCloseClass("close");
  }, []);

  useEffect(() => {
    if (activeClass && closeClass === "") {
      setActiveClass("active");
      setCloseClass("");
    } else {
      const timer = setTimeout(() => {
        props.onShow(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeClass, closeClass, props]);

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
