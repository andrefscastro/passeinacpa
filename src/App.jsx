import Topo from './componentes/Topo.jsx';
import Sessao1 from './componentes/sessao1';
import Sessao2 from './componentes/sessao2';
import Sessao3 from './componentes/sessao3';
import Sessao4 from './componentes/sessao4';
import Footer from './componentes/footer';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Passei na CPA</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
      <meta charset="utf-8"/>
    </Helmet>
    
    <Topo/>
    <Sessao1/>
    <Sessao2/>
    <Sessao3/>
    <Sessao4/>
    <Footer/>
    </>
  );
}

export default App;
