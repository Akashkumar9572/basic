import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Circle from './components/Circle';
import {motion} from 'framer-motion'

function App() {
  return (
    <>

    {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/calculator" element={<Calculator/>}></Route>
      <Route path="/mode" element={<Mode/>}></Route>
     </Routes> */}
      {/* <Home />
      <About />
      <Projects />
      <Skill />
      <Contact /> */}
      <div className="center">
      <div className="rounded-3xl flex mt-10 p-3 flex-col border-2 w-72 border-fuchsia-700">
    
    <motion.div 
    className="relative"
    drag
    // whileHover={{ scale: 1.2 }}
    

    ><Circle color ="bg-red-500" />
    <div 
    className="h-32 w-5 bottom-0 left-[119px] bg-black absolute "></div>
    </motion.div>

    {/* <motion.div 
    className=""
    drag
    ><Circle color ="bg-yellow-500" />
    </motion.div>

    <motion.div 
    className=""
    drag
    ><Circle color ="bg-green-700" />
    </motion.div> */}
      
{/* 
<Card imageUrl={dog} title="Mango" desc="mango is aam admi"/>
<Card imageUrl={dog} title="Mango" desc="mango is aam admi"/> */}



</div></div>

    </>
  );
}

export default App;
