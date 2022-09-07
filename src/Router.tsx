import { Route, Routes } from "react-router-dom";
import { DeafultLayout } from "./pages/layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}></Route>
    </Routes>
  );
}
