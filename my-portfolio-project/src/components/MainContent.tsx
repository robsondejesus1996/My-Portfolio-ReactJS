import '../styles/components/maincontent.sass'
import AbountContainer from './AbountContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'

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