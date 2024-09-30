import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from "./Components/NavBar"
import Home from './Pages/Home';
import About from './Pages/About'
import Data from "./Pages/Data";
import Equations from "./Pages/Equations";
import Algorithms from "./Pages/Algorithms";
import Interactive_Experiences from "./Pages/Interactive_Experiences";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="interactive_experiences" element={<Interactive_Experiences />} />
          <Route path="equations" element={<Equations />} />
          <Route path="data" element={<Data />} />
          <Route path="algorithms" element={<Algorithms />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
