import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos CSS de Bootstrap
import { useState } from "react"; // Importa el hook useState de React
import Registro from "./components/Registro/Registro"; // Importa el componente Registro desde un archivo local
import Alerta from "./components/Alerta/Alerta"; // Importa el componente Alerta desde un archivo local
import "./App.css"; // Importa los estilos CSS personalizados

function App() {
  // Define el componente funcional App
  const [alert, setAlert] = useState({
    // Define el estado 'alert' para almacenar el mensaje, color y visibilidad de la alerta
    message: "", // Mensaje de la alerta
    color: "", // Color de la alerta
    show: false, // Visibilidad de la alerta
  });

  const addAlert = (newAlert) => {
    // Define la función para agregar una alerta
    setAlert(newAlert); // Actualiza el estado de la alerta con la nueva alerta
  };

  return (
    <>
      <Registro setAlertMessage={addAlert} />{" "}
      {/* Renderiza el componente Registro y pasa la función para mostrar alertas como prop */}
      {alert.show && <Alerta message={alert.message} color={alert.color} />}{" "}
      {/* Renderiza la alerta si show es true */}
    </>
  );
}

export default App; // Exporta el componente App para ser utilizado en otros archivos
