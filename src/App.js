import Signup from './signup/Signup';
import HomePage from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
