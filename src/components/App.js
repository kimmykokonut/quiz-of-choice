import './../App.css';
import BodyControl from './BodyControl';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path="/main" element={<BodyControl />}  />
        <Route path="/home" element={<BodyControl />}  />
        <Route path="/" element={<BodyControl />}  />
        <Route path="/dashboard" element={<UserDashboard />} />         
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;