import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';

function App() {

  return (
    <div id="portfolio">
      <div className="nome"></div>
      <h1>Igor Ranielli</h1>
      <Sidebar />
      <MainContent/>
    </div>
  )
}

export default App
