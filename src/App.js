import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbars/Navbars';
import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';


function App() {
  return (
    <div className="App">
      
     <Navbars/>

     <MainBody/>

     <Footer/>
    </div>
  );
}

export default App;
