import Apresentation from "./Components/Apresentation";
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
  </div>
 );
}

export default App;
