import React from "react";

import LoginForm from "./components/Login/LoginForm";
import { GlobalStyle, Box, Title } from "./styled/styled";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />;
      <Box>
        <Title>Create an account</Title>
        <LoginForm></LoginForm>
      </Box>
    </React.Fragment>
  );
}

export default App;
