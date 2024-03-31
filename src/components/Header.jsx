import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos de propiedades

const Header = ({ textTitle }) => {
  // Define un componente funcional Header que recibe la propiedad textTitle
  return (
    <>
      <h1 className='header'>{textTitle}</h1>{" "}
      {/* Muestra el título del encabezado */}
    </>
  );
};

Header.propTypes = {
  // Define las restricciones de tipos para las propiedades del componente Header
  textTitle: PropTypes.string.isRequired, // textTitle debe ser una cadena de texto y es obligatoria
};

export default Header; // Exporta el componente Header para poder ser utilizado en otros archivos
