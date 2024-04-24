import Apresentation from "./Components/Apresentation";
import Detalhes from "./Components/Detalhes";
import Header from "./Components/Header";
import PersonalizadosClientes from "./Components/PersonalizadosClientes";
import ProdutosPersonalizados from "./Components/ProdutosPersonalizados";
import SendEmail from "./Components/SendEmail";

function App() {
 return (
  <div>
   <Header />
   <Apresentation />
   <ProdutosPersonalizados />
   <PersonalizadosClientes />
   <Detalhes />
   <SendEmail />
  </div>
 );
}

export default App;
