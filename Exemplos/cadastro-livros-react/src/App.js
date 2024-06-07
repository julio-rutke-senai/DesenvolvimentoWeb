import {Route, Routes} from 'react-router-dom'

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home';
import Contato from './Pages/Contato';

function App() {
  return (
    <div className="App">
      <Header>Cadastro de Livros</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer>Direitos Reservados - Julio Cezar Rutke</Footer>
    </div>
  );
}

export default App;
