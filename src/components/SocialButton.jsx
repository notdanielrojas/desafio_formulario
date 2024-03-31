import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos de propiedades

const SocialButton = ({ icon }) => {
  // Define un componente funcional SocialButton que recibe la propiedad icon
  return (
    <>
      <img className='icons' src={icon} alt='' />{" "}
      {/* Muestra el icono utilizando la URL proporcionada */}
    </>
  );
};

SocialButton.propTypes = {
  // Define las restricciones de tipos para las propiedades del componente SocialButton
  icon: PropTypes.string.isRequired, // icon debe ser una cadena de texto (URL del icono) y es obligatoria
};

export default SocialButton; // Exporta el componente SocialButton para poder ser utilizado en otros archivos
