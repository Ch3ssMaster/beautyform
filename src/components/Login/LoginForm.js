import { useState, useRef, useEffect } from "react";
import {
  isEmpty,
  validateName,
  validatePassword,
  passwordsMatch,
} from "../../lib/validation";
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
  const name = useRef("");
  const password = useRef("");
  const password2 = useRef("");
  const age = useRef("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [disabledButton, setButtonEnabled] = useState(true);
  const [validatedName, setValidatedName] = useState(true);
  const [validatedPassword, setValidatedPassword] = useState(true);
  const [validatedPasswordMatch, setValidatedPasswordMatch] = useState(true);

  const loginFormHandler = (event) => {
    event.preventDefault();
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
      }
      if (event.target.id === "password2") {
        setValidatedPasswordMatch(
          passwordsMatch(password.current.value, password2.current.value)
        );
        console.log("running!");
      }
      setButtonEnabled(
        !validatedName ||
          !validatedPassword ||
          isEmpty(name.current.value) ||
          isEmpty(password.current.value) ||
          isEmpty(age.current.value) ||
          !acceptTerms
      );
    }
  };

  useEffect(() => {
    setButtonEnabled(
      !validatedName ||
        !validatedPassword ||
        !validatedPasswordMatch ||
        isEmpty(name.current.value) ||
        isEmpty(password.current.value) ||
        isEmpty(age.current.value) ||
        !acceptTerms
    );
  }, [validatedName, validatedPassword, validatedPasswordMatch, acceptTerms]);

  return (
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
          type="password"
          placeholder="Enter your password"
          valid={validatedPassword}
          id="password"
        />
        <IconBox>
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
          type="password"
          placeholder="Re-enter your password"
          valid={validatedPasswordMatch}
          id="password2"
        />
        <IconBox>
          <EyeIcon size="40" title="Show password" />
        </IconBox>
      </InputGroup>
      {!validatedPasswordMatch && (
        <NoticeParagraph>Passwords do not match.</NoticeParagraph>
      )}
      <InputGroup>
        <Input type="date" valid={true} />
      </InputGroup>
      <InputGroup>
        <Input
          ref={age}
          type="number"
          placeholder="Age (numbers between 18 and 100)"
          min="18"
          max="100"
          step="1"
          valid={false}
          id="age"
          onChange={inputChangeHandler}
        />
        <IconBox>
          <DateIcon size="40" title="Set your age" />
        </IconBox>
      </InputGroup>
      <Label htmlFor="terms">
        <Checkbox
          name="terms"
          checked={acceptTerms}
          onChange={inputChangeHandler}
        />
        Accept terms
      </Label>
      <NoticeParagraph>You must agree before submitting.</NoticeParagraph>
      <Button disabled={disabledButton}>New Account!</Button>
    </form>
  );
};

export default LoginForm;
