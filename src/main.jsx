import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  'bootstrap/dist/css/bootstrap.min.css';
import GlobalContextProvider from './Context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
    <App/>
    </GlobalContextProvider>
  </React.StrictMode>,
)
