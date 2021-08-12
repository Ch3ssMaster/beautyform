import React, { useState, useRef, useEffect } from "react";
import SignInModal from "../UI/SignInModal";
import {
  isEmpty,
  validateName,
  validatePassword,
  passwordsMatch,
  validateDate,
  validateAge,
} from "../../lib/validation";
import { getDateRange, compareDateAndAge } from "../../lib/manageDates";
import {
  Checkbox,
  IconBox,
  Input,
  InputGroup,
  Label,
  Button,
  NoticeParagraph,
  UserIcon,
  EyeIcon,
  DateIcon,
} from "../../styled/styled";

const LoginForm = () => {
  const minDate = getDateRange(true, 100);
  const maxDate = getDateRange(false, 18);
  const name = useRef("");
  const password = useRef("");
  const password2 = useRef("");
  const datePicker = useRef("");
  const age = useRef("");

  const [disabledButton, setButtonEnabled] = useState(true);
  const [validatedName, setValidatedName] = useState(true);
  const [validatedPassword, setValidatedPassword] = useState(true);
  const [validatedPasswordMatch, setValidatedPasswordMatch] = useState(true);
  const [validatedDate, setValidatedDate] = useState(true);
  const [validatedAge, setValidatedAge] = useState(true);
  const [datesMatch, setDatesMatch] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [inputTypePassword2, setInputTypePassword2] = useState("password");
  const [showModal, showModalState] = useState(false);

  const loginFormHandler = (event) => {
    event.preventDefault();
    const accountData = {
      userName: name.current.value,
      password: password.current.value,
      birthDate: datePicker.current.value,
    };
    console.log(
      "Congratulations! Your new account have been successfully created."
    );
    console.log("Your account details:");
    console.log(JSON.stringify(accountData));
    showModalState(true);
  };

  const inputChangeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setAcceptTerms(!acceptTerms);
    } else {
      if (event.target.id === "name") {
        setValidatedName(validateName(name.current.value));
      }
      if (event.target.id === "password") {
        setValidatedPassword(validatePassword(password.current.value));
        setValidatedPasswordMatch(
          passwordsMatch(password.current.value, password2.current.value)
        );
      }
      if (event.target.id === "password2") {
        setValidatedPasswordMatch(
          passwordsMatch(password.current.value, password2.current.value)
        );
      }
      if (event.target.id === "datePicker") {
        setValidatedDate(
          validateDate(datePicker.current.value, minDate, maxDate)
        );
      }
      if (event.target.id === "age") {
        setValidatedAge(validateAge(age.current.value));
      }

      if (validatedDate && validatedDate) {
        setDatesMatch(
          compareDateAndAge(datePicker.current.value, age.current.value)
        );
      }

      setButtonEnabled(
        !validatedName ||
          isEmpty(name.current.value) ||
          !validatedPassword ||
          isEmpty(password.current.value) ||
          !validatedPasswordMatch ||
          !validatedDate ||
          !validatedAge ||
          isEmpty(age.current.value) ||
          !datesMatch ||
          !acceptTerms
      );
    }
  };

  const showPasswordHandler = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  const showPasswordHandler2 = () => {
    setInputTypePassword2(
      inputTypePassword2 === "password" ? "text" : "password"
    );
  };

  useEffect(() => {
    setButtonEnabled(
      !validatedName ||
        isEmpty(name.current.value) ||
        !validatedPassword ||
        isEmpty(password.current.value) ||
        !validatedPasswordMatch ||
        !validatedDate ||
        !validatedAge ||
        isEmpty(age.current.value) ||
        !datesMatch ||
        !acceptTerms
    );
  }, [
    validatedName,
    validatedPassword,
    validatedPasswordMatch,
    validatedDate,
    validatedAge,
    datesMatch,
    acceptTerms,
  ]);

  return (
    <React.Fragment>
      {showModal && <SignInModal onShow={showModalState} active={showModal} />}
      <form onSubmit={loginFormHandler}>
        <InputGroup>
          <Input
            ref={name}
            onChange={inputChangeHandler}
            type="text"
            placeholder="Enter your name"
            valid={validatedName}
            id="name"
          />
          <IconBox>
            <UserIcon size="40" title="Your name" />
          </IconBox>
        </InputGroup>
        {!validatedName && (
          <NoticeParagraph>
            Please choose a valid name (6 chars at least).
          </NoticeParagraph>
        )}
        <InputGroup>
          <Input
            ref={password}
            onChange={inputChangeHandler}
            type={inputType}
            placeholder="Enter your password"
            valid={validatedPassword}
            id="password"
          />
          <IconBox onClick={showPasswordHandler}>
            <EyeIcon size="40" title="Show password" />
          </IconBox>
        </InputGroup>
        {!validatedPassword && (
          <NoticeParagraph>
            Please provide a password at least with 8 characters, including
            lowers, uppers and numbers.
          </NoticeParagraph>
        )}
        <InputGroup>
          <Input
            ref={password2}
            onChange={inputChangeHandler}
            type={inputTypePassword2}
            placeholder="Re-enter your password"
            valid={validatedPasswordMatch}
            id="password2"
          />
          <IconBox onClick={showPasswordHandler2}>
            <EyeIcon size="40" title="Show password" />
          </IconBox>
        </InputGroup>
        {!validatedPasswordMatch && (
          <NoticeParagraph>Passwords do not match.</NoticeParagraph>
        )}
        <InputGroup>
          <Input
            ref={datePicker}
            type="date"
            min={minDate}
            max={maxDate}
            onChange={inputChangeHandler}
            valid={validatedDate}
            id="datePicker"
          />
        </InputGroup>
        {!validatedDate && (
          <NoticeParagraph>
            Please pick a valid date (between {minDate} and {maxDate}).
          </NoticeParagraph>
        )}
        <InputGroup>
          <Input
            ref={age}
            onChange={inputChangeHandler}
            type="number"
            placeholder="Age (numbers between 18 and 100)"
            min="18"
            max="100"
            step="1"
            valid={validatedAge}
            id="age"
          />
          <IconBox>
            <DateIcon size="40" title="Set your age" />
          </IconBox>
        </InputGroup>
        {!validatedAge && (
          <NoticeParagraph>
            Please pick a valid age (between 18 and 100).
          </NoticeParagraph>
        )}
        {!datesMatch && (
          <NoticeParagraph>
            The year of bird and your age do not match. Please modify date of
            bird or age.
          </NoticeParagraph>
        )}
        <Label htmlFor="terms">
          <Checkbox
            name="terms"
            checked={acceptTerms}
            onChange={inputChangeHandler}
          />
          Accept terms
        </Label>
        {!acceptTerms && (
          <NoticeParagraph>You must agree before submitting.</NoticeParagraph>
        )}
        <Button disabled={disabledButton}>New Account!</Button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
