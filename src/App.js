import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home/Home';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import Footer from './components/Shared/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
