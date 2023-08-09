import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/eu.jpg";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Robson de Jesus Imagem" />

      <p className="title">Engenheiro de Software</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://www.canva.com/design/DAFo41dboxk/v1idMxvPooYWOm4Wj_F0kA/view?utm_content=DAFo41dboxk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        className="btn"
        target="_blank"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
