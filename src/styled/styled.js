import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { Calendar2Date } from "@styled-icons/bootstrap/Calendar2Date";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Georama:wght@800&family=Rubik&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
	padding: 0;
	border: 0;
  }  
  body {    
    background-color: #ebebeb;  
  }
  form {
    font-family: 'Rubik', sans-serif;
  }
`;

export const Box = styled.div`
  width: 60%;
  margin: 10% auto;
  min-height: 60vh;
  background-color: #3a6ea5;
  border-radius: 12px;
  padding: 1rem 3rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const SmallParagraph = styled.p`
  font-size: 1.325rem;
  font-weight: bold;
  color: #fff;
`;

// Form fields

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
`;
export const Title = styled.h1`
  font-family: "Georama", sans-serif;
  font-size: 3.5em;
  text-align: center;
  color: #1c1e21;
  margin-bottom: 0.7em;
  margin-top: 0.3em;
`;

export const Label = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  font-size: 1.5rem;
  color: #fff;
`;

export const Input = styled.input.attrs((props) => ({
  id: props.id,
  type: props.type,
  name: props.name,
  placeholder: props.placeholder,
  valid: props.valid,
}))`
  border: #1c1e21;
  background-color: ${(props) => (props.valid ? "#f2f1f7" : "#db504a")};
  width: 100%;
  font-size: 1.5rem;
  padding: 0.2rem 0.5rem;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  ${(props) =>
    !props.valid &&
    `::placeholder{
      color:#fff;
      opacity: .7;`}

  &:focus {
    border: none;
    background-color: #f2f1f7;
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em #1c1e21;
  }
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: inline-grid;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.1em solid #1c1e21;
  font-size: 1.5rem;
  margin-top: 1.3rem;
  margin-right: 0.7rem;
  transition: transform 0.1s ease-in 25ms;
  transform: scale(0.9);
  transform-origin: bottom left;

  &:focus {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em #1c1e21;
  }
  &:checked {
    transform: scale(1);
  }
`;

export const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  width: 100%;
  font-family: "Georama", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-top: 1.3rem;
  color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0 40px 40px #ff6700 inset, 0 0 0 0 #ff6700;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  &:disabled {
    color: #1c1e21;
    box-shadow: 0 0 40px 40px #ced0ce inset, 0 0 0 0 #ced0ce;
  }

  &:hover:enabled {
    background-color: #da402b;
    box-shadow: 0 0 10px 0 #fb4c1f inset, 0 0 10px 4px #fb4c1f;
  }
`;

export const IconBox = styled.span`
  ${StyledIconBase} {
    color: #fff;
    padding: 0.39rem;
    padding: 0.2rem 0.5rem;
    background-color: #223843;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

// Form validation
export const NoticeParagraph = styled.p`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #ff5e5b;
`;

// Form Icons
export const UserIcon = styled(UserCircle).attrs((props) => ({
  title: props.title,
  size: props.size,
}))``;
export const EyeIcon = styled(EyeFill).attrs((props) => ({
  title: props.title,
  size: props.size,
}))``;
export const DateIcon = styled(Calendar2Date).attrs((props) => ({
  title: props.title,
  size: props.size,
}))``;

// Modal view

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 30vh;
  left: 20%;
  width: 60%;
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ebebeb;
  padding: 1rem 1rem 3rem;
  background-color: #2a9d8f;
  font-weight: bold;
  border-radius: 20px;
  font-family: "Rubik", sans-serif;
  font-size: 2.2rem;
  -webkit-transform: ${(props) => (props.active ? "scale(1)" : "scale(0.7)")};
  -moz-transform: ${(props) => (props.active ? "scale(1)" : "scale(0.7)")};
  -ms-transform: ${(props) => (props.active ? "scale(1)" : "scale(0.7)")};
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0.7)")};
  opacity: ${(props) => (props.active ? 1 : 0)};
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s 1s;
`;

export const CloseModal = styled(CloseCircleOutline).attrs((props) => ({
  onClick: props.onClick,
  title: props.title,
  size: props.size,
}))`
  color: #b80c09;
  align-self: flex-end;
  margin-bottom: 2%;
  opacity: 0.8;
`;
