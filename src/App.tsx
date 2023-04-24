import React, { ReactNode } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import { routes } from './routes/routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          {/* {routes && routes.map(({path, name, component}:any, index): ReactNode => {
            console.log("HOLA")
            return (
                <Route path={path} element={component} key={index+path+name} />
              )
          })} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
