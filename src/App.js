import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './components/navbar'

import Home from './views/home'
import Adicionar from './views/adicionar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
