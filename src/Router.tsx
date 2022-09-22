import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { DeafultLayout } from "./pages/layouts/DefaultLayout";
import { SuccessRequest } from "./pages/SuccessRequest";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pedido-confirmado" element={<SuccessRequest />} />
      </Route>
    </Routes>
  );
}
