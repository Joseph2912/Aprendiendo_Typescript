import "./App.css";
import { QueMensaje } from "./Mensaje";

//* Componentes funcionales, existen otros que son los componentes de clase pero ya casi no se usan debido a que requiere constructor y mas cosas entonces cada vez se usa menos
const App = () => {
  return <QueMensaje mensajeA="hola" mensajeB="adios" />;
};

export default App;
