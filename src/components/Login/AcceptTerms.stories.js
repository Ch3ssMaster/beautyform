import React from "react";
import { inputChangeHandler } from "./LoginForm";
import { Label, Checkbox, NoticeParagraph } from "../../styled/styled";

export default {
  title: "CheckBox",
  Component: Checkbox,
};

export const Default = () => (
  <React.Fragment>
    <Label htmlFor="terms">
      <Checkbox name="terms" checked={false} onChange={inputChangeHandler} />
      Accept terms
    </Label>
    {false && (
      <NoticeParagraph>You must agree before submitting.</NoticeParagraph>
    )}
  </React.Fragment>
);
export const Focus = () => (
    <React.Fragment>
      <Label htmlFor="terms">
        <Checkbox name="terms" checked={false} onChange={inputChangeHandler} />
        Accept terms
      </Label>
      {false && (
        <NoticeParagraph>You must agree before submitting.</NoticeParagraph>
      )}
    </React.Fragment>
  );
Focus.parameters = { pseudo: { focus: true } };
export const Checked = () => (
    <React.Fragment>
      <Label htmlFor="terms">
        <Checkbox name="terms" checked={true} onChange={inputChangeHandler} />
        Accept terms
      </Label>
      {false && (
        <NoticeParagraph>You must agree before submitting.</NoticeParagraph>
      )}
    </React.Fragment>
  );
export const CheckedFocus = () => (
    <React.Fragment>
      <Label htmlFor="terms">
        <Checkbox name="terms" checked={true} onChange={inputChangeHandler} />
        Accept terms
      </Label>
      {false && (
        <NoticeParagraph>You must agree before submitting.</NoticeParagraph>
      )}
    </React.Fragment>
  );
  CheckedFocus.parameters = { pseudo: { focus: true } };