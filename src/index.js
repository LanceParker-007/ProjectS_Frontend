import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";

export const DEV_server = `http://localhost:5000/api/v1`;
export const PROD_server = `https://projects-backend-tv2z.onrender.com/api/v1`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
