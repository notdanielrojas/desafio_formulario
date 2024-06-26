import { useState } from "react"; // Importa el hook useState de React para manejar el estado del componente
import Formulario from "../Formulario/Formulario"; // Importa el componente Formulario desde un archivo local
import SocialButton from "../SocialButton/SocialButton"; // Importa el componente SocialButton desde un archivo local
import Header from "../Header/Header"; // Importa el componente Header desde un archivo local
import Subtitle from "../Subtitle/Subtitle"; // Importa el componente Subtitle desde un archivo local
import Alerta from "../Alerta/Alerta"; // Importa el componente Alerta desde un archivo local

const Registro = () => {
  // Define el componente funcional Registro
  const [alerta, setAlerta] = useState({ colorAlert: "", textAlert: "" }); // Define el estado 'alerta' para almacenar el color y texto de la alerta y la función para actualizarlo

  const handleAlerta = (color, texto) => {
    // Define la función para manejar la alerta
    setAlerta({ colorAlert: color, textAlert: texto }); // Actualiza el estado de la alerta con el color y texto especificado
  };

  return (
    <div className='cardStyle'>
      {/* Renderiza un contenedor con estilo de tarjeta */}
      <Header textTitle='Crea una cuenta' />
      {/* Renderiza el encabezado con el texto especificado */}
      <div className='iconStyle'>
        {/* Renderiza un contenedor para los iconos */}
        <SocialButton button={"fa-facebook"} />
        <SocialButton button={"fa-github"} />
        <SocialButton button={"fa-linkedin"} />
        {/* Renderiza los botones sociales con los iconos especificados */}
      </div>
      <Subtitle subtitleText='o usa tu email para registrarte' />
      {/* Renderiza el subtítulo con el texto especificado */}
      <Formulario handleAlerta={handleAlerta} />
      {/* Renderiza el formulario y pasa la función para manejar la alerta como prop */}
      <Alerta colorAlert={alerta.colorAlert} textAlert={alerta.textAlert} />
      {/* Renderiza la alerta con el color y texto especificado */}
    </div>
  );
};

export default Registro; // Exporta el componente Registro para ser utilizado en otros archivos
