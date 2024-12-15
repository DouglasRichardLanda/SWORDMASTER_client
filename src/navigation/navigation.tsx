
import {Route, Routes} from "react-router-dom"
import MainLayout from "../layouts/main-layout.tsx";
import LandingPage from "../pages/landing/landing-page.tsx";

export default function Navigation () {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path={"*"} element={<div>NOT FOUND</div>} />
    </Routes>
  )
}