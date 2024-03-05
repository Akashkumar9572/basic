import Navbar from './components/Navbar';
import logo from './logo.svg';
import Campus from './pages/Campus';
import Events from './pages/Events';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Syllabus from './pages/Syllabus';
import Result from './pages/Result';
import ExamPage from './pages/ExamPage';
import Counter from './app/Counter';
import Projects from './pages/Projects';
import Calculator from './app/Calculator';
import Mode from './app/Mode';

function App() {
  return (
    <>
    


    <Navbar/> 

     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/campus" element={<Campus/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/syllabus" element={<Syllabus/>}></Route>
      <Route path="/result" element={<Result/>}></Route>
      <Route path="/exam" element={<ExamPage/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/calculator" element={<Calculator/>}></Route>
      <Route path="/mode" element={<Mode/>}></Route>
      

     </Routes>
    
    

    </>
  );
}

export default App;
