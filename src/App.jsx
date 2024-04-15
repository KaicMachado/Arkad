import Apresentation from "./Components/Apresentation";
import Detalhes from "./Components/Detalhes";
import Header from "./Components/Header";
import PersonalizadosClientes from "./Components/PersonalizadosClientes";
import ProdutosPersonalizados from "./Components/ProdutosPersonalizados";

function App() {
 return (
  <div>
   <Header />
   <Apresentation />
   <ProdutosPersonalizados />
   <PersonalizadosClientes />
   <Detalhes />
  </div>
 );
}

export default App;
