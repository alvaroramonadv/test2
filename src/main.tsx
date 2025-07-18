import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { reportWebVitals } from "./utils/webVitals";

createRoot(document.getElementById("root")!).render(<App />);

// Reportar Web Vitals para monitoramento de performance
reportWebVitals();
