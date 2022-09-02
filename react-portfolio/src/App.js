
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects/Projects'
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
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
