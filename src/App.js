import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './components/navbar'

import Login from './views/login';
import CadastrarUsuario from './views/cadastrar-usuario';
import Home from './views/home'
import Adicionar from './views/adicionar';
import Historico from './views/historico';
import Suporte from './views/suporte';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastrar-usuario' element={<CadastrarUsuario/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
        <Route path='/historico' element={<Historico/>}/>
        <Route path='/suporte' element={<Suporte/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
