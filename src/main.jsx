import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ChakraProvider, Theme } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
// import { ChakraProvider } from '@/components/ui/provider';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
