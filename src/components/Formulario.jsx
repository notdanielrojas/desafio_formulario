import { useState } from "react"; // Importa el hook useState de React para manejar el estado del componente
import Button from "react-bootstrap/Button"; // Importa el componente Button de React Bootstrap
import Form from "react-bootstrap/Form"; // Importa el componente Form de React Bootstrap
import Alerta from "./Alerta"; // Importa el componente Alerta desde un archivo local

const Formulario = () => {
  // Define el componente funcional Formulario
  const [nombre, setNombre] = useState(""); // Define el estado 'nombre' y la función para actualizarlo
  const [email, setEmail] = useState(""); // Define el estado 'email' y la función para actualizarlo
  const [password, setPassword] = useState(""); // Define el estado 'password' y la función para actualizarlo
  const [confirmPassword, setConfirmPassword] = useState(""); // Define el estado 'confirmPassword' y la función para actualizarlo
  const [show, setShow] = useState(false); // Define el estado 'show' para controlar la visibilidad de la alerta y la función para actualizarlo
  const [alert, setAlert] = useState({ message: "", color: "" }); // Define el estado 'alert' para almacenar el mensaje y color de la alerta y la función para actualizarlo

  const submit = (event) => {
    // Define la función para manejar el envío del formulario
    event.preventDefault(); // Previene el comportamiento por defecto de envío del formulario

    if (
      nombre.trim() === "" || // Verifica si el nombre está vacío
      email.trim() === "" || // Verifica si el email está vacío
      password.trim() === "" || // Verifica si la contraseña está vacía
      confirmPassword.trim() === "" // Verifica si la confirmación de contraseña está vacía
    ) {
      setShow(true); // Muestra la alerta
      setAlert({
        // Actualiza el estado de la alerta con el mensaje y color correspondiente
        message: "Completa todos los campos !",
        color: "danger",
      });
      return; // Sale de la función
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    if (!emailRegex.test(email)) {
      // Verifica si el email no cumple con el formato válido
      setShow(true); // Muestra la alerta
      setAlert({
        // Actualiza el estado de la alerta con el mensaje y color correspondiente
        message: "El correo electrónico no tiene un formato válido",
        color: "danger",
      });
      return; // Sale de la función
    }

    if (password !== confirmPassword) {
      // Verifica si las contraseñas no coinciden
      setShow(true); // Muestra la alerta
      setAlert({
        // Actualiza el estado de la alerta con el mensaje y color correspondiente
        message: "Las contraseñas no coinciden",
        color: "danger",
      });
      return; // Sale de la función
    }

    const contraseñaValida = verificarContraseña(password); // Verifica si la contraseña cumple con los requisitos
    if (!contraseñaValida) {
      // Verifica si la contraseña no es válida
      setShow(true); // Muestra la alerta
      setAlert({
        // Actualiza el estado de la alerta con el mensaje y color correspondiente
        message:
          "La contraseña debe tener al menos 8 caracteres, un carácter especial, una letra mayúscula, una letra minúscula y un número.",
        color: "danger",
      });
      return; // Sale de la función
    }

    // Si se superan todas las validaciones, se reinician los campos del formulario y se muestra la alerta de éxito
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShow(true);
    setAlert({ message: "Formulario enviado", color: "success" });
  };

  const verificarContraseña = (contraseña) => {
    // Define la función para verificar si la contraseña cumple con los requisitos
    const longitudMinima = 8; // Define la longitud mínima requerida para la contraseña
    const tieneCaracterEspecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      contraseña
    ); // Verifica si la contraseña contiene al menos un carácter especial
    const tieneMayuscula = /[A-Z]/.test(contraseña); // Verifica si la contraseña contiene al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/.test(contraseña); // Verifica si la contraseña contiene al menos una letra minúscula
    const tieneNumero = /[0-9]/.test(contraseña); // Verifica si la contraseña contiene al menos un número

    return (
      // Retorna true si la contraseña cumple con todos los requisitos, de lo contrario retorna false
      contraseña.length >= longitudMinima &&
      tieneCaracterEspecial &&
      tieneMayuscula &&
      tieneMinuscula &&
      tieneNumero
    );
  };

  return (
    <>
      <Form onSubmit={submit} className='formulario'>
        {" "}
        {/* Renderiza el formulario con el evento onSubmit */}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          {" "}
          {/* Define un grupo de formulario para el nombre */}
          <Form.Control
            type='text'
            placeholder='Nombre'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)} // Maneja el cambio en el campo nombre
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          {" "}
          {/* Define un grupo de formulario para el email */}
          <Form.Control
            type='email'
            placeholder='tuemail@ejemplo.com'
            value={email}
            onChange={(event) => setEmail(event.target.value)} // Maneja el cambio en el campo email
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          {" "}
          {/* Define un grupo de formulario para la contraseña */}
          <Form.Control
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={(event) => setPassword(event.target.value)} // Maneja el cambio en el campo contraseña
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          {" "}
          {/* Define un grupo de formulario para la confirmación de contraseña */}
          <Form.Control
            type='password'
            placeholder='Confirma tu contraseña'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)} // Maneja el cambio en el campo confirmación de contraseña
          />
        </Form.Group>
        <Button className='buttonStyle' variant='success' type='submit'>
          {" "}
          {/* Renderiza el botón de registro */}
          Registrarse
        </Button>
        {show && (
          <Alerta colorAlert={alert.color} textAlert={alert.message} />
        )}{" "}
        {/* Renderiza la alerta si show es true */}
      </Form>
    </>
  );
};

export default Formulario; // Exporta el componente Formulario para ser utilizado en otros archivos
