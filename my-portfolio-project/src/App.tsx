import MainContent from "./components/MainContent";
import MainContentNotices from "./components/MainContentNotices";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Robson de Jesus</h1>
      <Sidebar />
      <MainContent />
      
    </div>
  );
}

export default App;