import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos de propiedades
import Alert from "react-bootstrap/Alert"; // Importa el componente de Alert de la librería React Bootstrap

const Alerta = ({ colorAlert, textAlert }) => {
  // Define un componente funcional Alerta que recibe dos propiedades: colorAlert y textAlert
  return (
    // Retorna el JSX del componente
    <>
      <Alert variant={colorAlert}>{textAlert}</Alert>{" "}
      {/* Muestra el componente de Alert con el color y texto especificados */}
    </>
  );
};

Alerta.propTypes = {
  // Define las restricciones de tipos para las propiedades del componente Alerta
  colorAlert: PropTypes.string.isRequired, // colorAlert debe ser una cadena de texto y es obligatoria
  textAlert: PropTypes.string.isRequired, // textAlert debe ser una cadena de texto y es obligatoria
};

export default Alerta; // Exporta el componente Alerta para poder ser utilizado en otros archivos
