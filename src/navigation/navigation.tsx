
import {Route, Routes} from "react-router-dom"
import MainLayout from "../layouts/main-layout.tsx";
import LandingPage from "../pages/landing/landing-page.tsx";
import AboutMe from "../pages/about-me/about-me.tsx";
import Contuct from "../pages/contact/contuct.tsx";

export default function Navigation () {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={"/about"} element={<AboutMe />} />
        <Route path={"/contuct"} element={<Contuct />} />
      </Route>
      <Route path={"*"} element={<div>NOT FOUND</div>} />
    </Routes>
  )
}