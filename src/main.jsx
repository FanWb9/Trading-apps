  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { BrowserRouter } from 'react-router-dom'; 
  import { GoogleOAuthProvider } from '@react-oauth/google';
  import App from './App.jsx'
  import './index.css'
  import './i18n/i18n.js'

 
  const clientId = '43930782723-t9cvcfgrh5sccdc988cnkgpa7srtn29u.apps.googleusercontent.com';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </StrictMode>
  )
