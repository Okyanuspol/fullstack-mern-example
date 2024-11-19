import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Login from "./components/Login.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/" element={
            <div>
              <a href="/login">Login</a> | <a href="/register">Registrieren</a>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
