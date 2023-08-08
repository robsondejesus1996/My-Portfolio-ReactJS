import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
       <aside id="sidebar">
            <img src={Avatar} alt="Robson de Jesus Imagem" />

            <p className="title">Engenheiro de Software</p>
            <p>redes sociais</p>
            <p>informacoes de contato</p>
            <a href="" className="btn">
                Download currículo
            </a>
       </aside>
    )
}


export default Sidebar