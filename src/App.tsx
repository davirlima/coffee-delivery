import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
