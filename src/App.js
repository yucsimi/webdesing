import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './componentes/Navbar';
import Header from './componentes/Header';
import Passions from './componentes/Passions';
import Portafolio from './componentes/Portafolio';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
function App() {
  return (
    <div >
      <Nav />
      <Header />
      <Passions />
      <Portafolio />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
