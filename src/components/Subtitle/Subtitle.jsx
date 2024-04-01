import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos de propiedades

const Subtitle = ({ subtitleText }) => {
  // Define un componente funcional Subtitle que recibe la propiedad subtitleText
  return (
    <>
      <h6 className='texto'>{subtitleText}</h6>{" "}
      {/* Muestra el subtítulo con el texto proporcionado */}
    </>
  );
};

Subtitle.propTypes = {
  // Define las restricciones de tipos para las propiedades del componente Subtitle
  subtitleText: PropTypes.string.isRequired, // subtitleText debe ser una cadena de texto y es obligatoria
};

export default Subtitle; // Exporta el componente Subtitle para poder ser utilizado en otros archivos
