import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MailProvider, MailContext } from "./contexts/MailContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export{MailContext};

root.render(
  <StrictMode>
    <BrowserRouter>
      <MailProvider>
        <App />
      </MailProvider>
    </BrowserRouter>
  </StrictMode>
);
