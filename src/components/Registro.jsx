import { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Header from "./Header";
import Subtitle from "./Subtitle";
import Alerta from "./Alerta";

import iconFacebook from "../assets/imgs/iconFacebook.png";
import iconGitHub from "../assets/imgs/iconGitHub.png";
import iconLinkedIn from "../assets/imgs/iconLinkedIn.png";

const Registro = () => {
  const [alerta, setAlerta] = useState({ colorAlert: "", textAlert: "" });

  const handleAlerta = (color, texto) => {
    setAlerta({ colorAlert: color, textAlert: texto });
  };

  return (
    <div className='cardStyle'>
      <Header textTitle='Crea una cuenta' />
      <div className='iconStyle'>
        <SocialButton icon={iconFacebook} />
        <SocialButton icon={iconGitHub} />
        <SocialButton icon={iconLinkedIn} />
      </div>
      <Subtitle subtitleText='o usa tu email para registrarte' />
      <Formulario handleAlerta={handleAlerta} />
      <Alerta colorAlert={alerta.colorAlert} textAlert={alerta.textAlert} />
    </div>
  );
};

export default Registro;
