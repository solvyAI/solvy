import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Footer from './Components/Footer';
import ScanSolve from './Components/ScanSolve';
import ChatPDF from './Components/ChatPDF';
import VidSum from './Components/VidSum';
import EssayWriter from "./Components/EssayWriter"
import PrivacyPolicy from './Components/Policy';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<div className="App">
       <Home/>
       <About/>
        <ScanSolve/>
        <ChatPDF/>
        <VidSum/>
        <EssayWriter/>
       <Footer/>
       
    </div>} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    
  );
}

export default App;
