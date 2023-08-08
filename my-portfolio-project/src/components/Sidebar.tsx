import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
    return (
       <aside id="sidebar">
            <img src={Avatar} alt="Robson de Jesus Imagem" />

            <p className="title">Engenheiro de Software</p>
            <SocialNetworks/>
            <p>informacoes de contato</p>
            <a href="" className="btn">
                Download currículo
            </a>
       </aside>
    )
}


export default Sidebar