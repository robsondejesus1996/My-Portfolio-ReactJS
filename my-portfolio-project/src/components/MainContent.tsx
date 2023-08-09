import AbountContainer from './AbountContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'

import '../styles/components/maincontent.sass'


const MainContent = () => {
    return (
        <main id="main-content">
            <AbountContainer/>
            <TecnologiesContainer/>
            <ProjectsContainer/>
        </main>
    )
}


export default MainContent