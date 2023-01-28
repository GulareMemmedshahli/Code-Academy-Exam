import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Header from './layout/header';
import Add from './pages/add';
import Footer from './layout/footer';
import Details from './pages/details';
import Eror from './pages/eror';
function App() {
  return (
    <div >
      <Header/>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/add" element={<Add />}/>
<Route path="/about" element={<About />}/>
<Route path="/servis" element={<Services />}/>
<Route path="/blog" element={<Blog />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/detail/:_id" element={<Details />}/>
<Route path="*" element={<Eror />}/>


</Routes>
<Footer/>


    </div>
  );
}

export default App;
