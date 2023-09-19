import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import SongDisplay from './Components/SongDisplay/SongDisplay';
import './fonts/MUSED.ttf';
import TemplateWorkspace from './Components/TemplateWorkspace/TemplateWorkspace';
import LessonPlanGenerator from './Components/LessonPlanGenerator/LessonPlanGenerator';
import RepSearch from './Components/RepSearch/RepSearch';
import ConceptSequence from './Components/ConceptSequence/ConceptSequence';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/songDisplay" element={<SongDisplay />} />
          <Route path="/templateWorkspace" element={<TemplateWorkspace />} />
          <Route
            path="/lessonPlanGenerator"
            element={<LessonPlanGenerator />}
          />
          <Route path="/repSearch" element={<RepSearch />} />
          <Route path="/conceptSequence" element={<ConceptSequence />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
