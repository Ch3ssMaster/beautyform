import { Button } from "../../styled/styled";

export default {
  title: "SubmitFormButton",
  Component: Button,
};

export const Default = () => <Button disabled={true}>New Account!</Button>;
export const Active = () => <Button disabled={false}>New Account!</Button>;
export const Hover = () => <Button disabled={false}>New Account!</Button>;
Hover.parameters = { pseudo: { hover: true } };
