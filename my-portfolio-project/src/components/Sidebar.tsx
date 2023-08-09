import SocialNetworks from './SocialNetworks'
import Avatar from '../img/eu.jpg'
import InformationContainer from "./InformationContainer"

import '../styles/components/sidebar.sass'


const Sidebar = () => {
    return (
       <aside id="sidebar">
            <img src={Avatar} alt="Robson de Jesus Imagem" />

            <p className="title">Engenheiro de Software</p>
            <SocialNetworks/>
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
       </aside>
    )
}


export default Sidebar