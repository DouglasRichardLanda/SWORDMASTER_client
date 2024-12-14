import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>SWORDMASTER</div>
  </StrictMode>,
)