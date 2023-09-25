import './LessonPlanGenerator.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import ConceptSequence from '../ConceptSequence/ConceptSequence';
import { useSelector } from 'react-redux';

function LessonPlanGenerator() {
  const conceptSequence = useSelector(
    (state) => state.conceptSequence.conceptSequence
  );
  console.log(conceptSequence);

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
          <p>
            I see my students for *** minute lessons, *** times a week for ***
            weeks a semester.
          </p>
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
        <div className="conceptSequence"></div>
        <h2>Concept Sequence</h2>
        <p>(modify)</p>
        <ul className="conceptList">
          {conceptSequence.map((concept) => (
            <li className="concept" key={concept.id}>
              {concept.concept}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LessonPlanGenerator;
