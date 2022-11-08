import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Books from './Pages/Books';
import Shop from './Pages/Shop';
import Contacts from './Pages/Contacts';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/books' component={Books} />
          <Route path='/shop' component={Shop} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/Login' component={Login} />
          <Route path='/Register' component={Register} />
        </Routes>
      </Router>
    );

}

export default App;
