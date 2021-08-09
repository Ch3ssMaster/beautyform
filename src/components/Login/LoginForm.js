import { useState } from "react";
import {
  Checkbox,
  IconBox,
  Input,
  InputGroup,
  Label,
  Button,
  UserIcon,
  EyeIcon,
  DateIcon,
} from "../../styled/styled";

const LoginForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const loginFormHandler = (event) => {
    event.preventDefault();
    console.log("running!");
  };

  const inputChangeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setAcceptTerms(!acceptTerms);
      console.log("checkbox running!");
    }
  };
  return (
    <form onSubmit={loginFormHandler}>
      <InputGroup>
        <Input type="text" placeholder="Enter your name" />
        <IconBox>
          <UserIcon size="40" title="User name" />
        </IconBox>
      </InputGroup>
      <InputGroup>
        <Input type="password" placeholder="Enter your password" />
        <IconBox>
          <EyeIcon size="40" title="Show password" />
        </IconBox>
      </InputGroup>
      <InputGroup>
        <Input type="password" placeholder="Re-enter your password" />
        <IconBox>
          <EyeIcon size="40" title="Show password" />
        </IconBox>
      </InputGroup>
      <InputGroup>
        <Input type="date" placeholder="Re-enter your password" />
      </InputGroup>
      <InputGroup>
        <Input
          type="number"
          placeholder="Age (numbers between 18 and 100)"
          min="18"
          max="100"
          step="1"
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
      <Button>New Account!</Button>
    </form>
  );
};

export default LoginForm;
