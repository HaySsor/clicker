import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {PointProvider} from "./context/PointContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PointProvider>
          <App />
      </PointProvider>
  </StrictMode>,
)
