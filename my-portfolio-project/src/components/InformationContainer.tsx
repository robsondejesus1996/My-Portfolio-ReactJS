import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment, AiFillLinkedin } from "react-icons/ai";

import {
  DiGithubBadge,
} from 'react-icons/di'

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(49)99910-7774</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>robsondejesus1996@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <DiGithubBadge id="git-icon" />
        <div>
          <h3>GitHub</h3>
          <a href="https://github.com/robsondejesus1996"><p>robsondejesus1996</p></a>
        </div>
      </div>

      <div className="info-card">
        <AiFillLinkedin id="linkedin-icon" />
        <div>
          <h3>Linkedin</h3>
          <a href="https://www.linkedin.com/in/robson-jesus-88a2a351/"><p>Robson de Jesus</p></a>
        </div>
      </div>
      
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Curitiba / PR</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;