import "./App.css";
import { QueMensaje } from "./Mensaje";
import { QueMensaje4 } from "./Mensaje";

//* Componentes funcionales, existen otros que son los componentes de clase pero ya casi no se usan debido a que requiere constructor y mas cosas entonces cada vez se usa menos
const App = () => {
  return <QueMensaje4 mensajeA3={["hola", "hey", "nose"]} />;
  <QueMensaje mensajeA="hola" mensajeB="adios" />;
};

export default App;
