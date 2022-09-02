
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
      </Route>
      <Route path="/projects" element={<Layout/>} >
        <Route index element={<Projects/>}/>
      </Route>
      <Route path="/contact" element={<Layout/>} >
        <Route index element={<Contact/>}/>
      </Route>
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
