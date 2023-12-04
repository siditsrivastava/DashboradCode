import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Solution from './Components/Solution/Solution'

function App() {
  return (
  <>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/solution" element={<Solution/>}/>
   </Routes>
   
  </>
  );
}

export default App;
