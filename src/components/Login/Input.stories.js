import { name, inputChangeHandler } from "./LoginForm";
import { InputGroup, Input } from "../../styled/styled";

export default {
  title: "Input",
  Component: Input,
};

export const DefaultName = () => (
  <InputGroup>
    <Input
      ref={name}
      onChange={inputChangeHandler}
      type="text"
      placeholder="Enter your name"
      valid={true}
      id="name"
    />
  </InputGroup>
);
export const DefaultNameFocus = () => (
  <InputGroup>
    <Input
      ref={name}
      onChange={inputChangeHandler}
      type="text"
      placeholder="Enter your name"
      valid={true}
      id="name"
    />
  </InputGroup>
);
DefaultNameFocus.parameters = { pseudo: { focus: true } };
export const NameError = () => (
    <InputGroup>
    <Input
      ref={name}
      onChange={inputChangeHandler}
      type="text"
      placeholder=""
      valid={false}
      id="name"
      />
  </InputGroup>
);
export const NameErrorFocus = () => (
    <InputGroup>
    <Input
      ref={name}
      onChange={inputChangeHandler}
      type="text"
      placeholder=" "
      valid={false}
      id="name"
      />
  </InputGroup>
);
NameErrorFocus.parameters = { pseudo: { focus: true } };
