import { Alert } from "@/components/ui/alert";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      colorPalette={"white"}
      w={"container-lg"}
      varaint={"outline"}
    >
      {message}
    </Alert>
  );
};

export default ErrorComponent;
