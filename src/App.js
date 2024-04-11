import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Footer from './Components/Footer';
import ScanSolve from './Components/ScanSolve';
import ChatPDF from './Components/ChatPDF';
import VidSum from './Components/VidSum';
import EssayWriter from "./Components/EssayWriter"
function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
        <ScanSolve/>
        <ChatPDF/>
        <VidSum/>
        <EssayWriter/>
       <Footer/>
       
    </div>
  );
}

export default App;
