import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DeafultLayout } from "./pages/layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
