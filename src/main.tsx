import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import './styles/index.css'
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation/navigation.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </StrictMode>,
)
