import './LessonPlanGenerator.css';
import { NavLink, useNavigate } from 'react-router-dom';

function LessonPlanGenerator() {
  const navigate = useNavigate();

  const handleConceptSequenceClick = () => {
    navigate('ConceptSequence');
  };
  return (
    <div>
      <h1>LESSON PLAN GENERATOR</h1>
      <div className="lessonPlanGrid">
        <div className="demographics">
          <h2>Grade</h2>
          <h2>Represented Languages</h2>
          <h3>English</h3>
          <h3>Spanish</h3>
          <p>Add more</p>
        </div>
        <div className="contentAndSchedule">
          <h2>Content Options:</h2>
          <h3>Starting points:</h3>
          <h4>Melodic</h4>
          <h4>Rhythmic</h4>
          <h3>Ending points:</h3>
          <h4>Melodic</h4>
          <h4>Rhythmic</h4>
        </div>
        <div className="advanced">
          <h2>Advanced (show/hide)</h2>
          <p>Would you like to modify the template structure?</p>
          <button>Yes</button>
          <p>Would you like to modify the concept sequence?</p>
          <NavLink to="ConceptSequence" onClick={handleConceptSequenceClick}>
            <button>Yes</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LessonPlanGenerator;
