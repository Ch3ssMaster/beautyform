import React from "react";

import LoginForm from "./components/Login/LoginForm";
import { GlobalStyle, Box, Title, SmallParagraph } from "./styled/styled";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Box>
        <Title>Create an account</Title>
        <SmallParagraph>(All fields must be filled)</SmallParagraph>
        <LoginForm></LoginForm>
      </Box>
    </React.Fragment>
  );
}

export default App;
