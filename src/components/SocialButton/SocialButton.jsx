import PropTypes from "prop-types"; // Importa el módulo PropTypes para la validación de tipos de propiedades
import { Button } from "react-bootstrap";

function SocialButton({ button }) {
  return (
    <>
      <Button variant='outline-dark rounded-circle p-3 m-2'>
        {" "}
        {/* Crea un botón con variant 'outline-dark' y clases CSS adicionales */}
        <i className={`fa-brands ${button} fa-xl`}></i>{" "}
        {/* Renderiza un icono utilizando la clase CSS determinada por la propiedad 'button' */}
      </Button>
    </>
  );
}

SocialButton.propTypes = {
  // Define las restricciones de tipos para las propiedades del componente SocialButton
  button: PropTypes.string.isRequired, // button debe ser una cadena de texto (URL del icono) y es obligatoria
};

export default SocialButton; // Exporta el componente SocialButton para poder ser utilizado en otros archivos
