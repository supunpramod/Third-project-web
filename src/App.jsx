import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated imports
import LoginPage from './pages/loginPage';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>  {/* Wrap everything in BrowserRouter */}
      <div>
        
        <Routes>       {/* Add Routes component */}
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;