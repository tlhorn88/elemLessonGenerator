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
        <div className="advanced">
          <h2>Schedule</h2>
          <p>I see my students for *** minute lessons, *** times a week for *** weeks a semester.</p>
        
        </div>
        <div className="content">
          <h2>Content Options:</h2>
          <h3>Starting points:</h3>
          <h4>Melodic</h4>
          <h4>Rhythmic</h4>
          <h3>Ending points:</h3>
          <h4>Melodic</h4>
          <h4>Rhythmic</h4>
        </div>
      </div>
    </div>
  );
}

export default LessonPlanGenerator;
