import './LessonPlanGenerator.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import ConceptSequence from '../ConceptSequence/ConceptSequence';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function LessonPlanGenerator() {

  const navigate = useNavigate();

  const conceptSequence = useSelector(
    (state) => state.conceptSequence.conceptSequence
  );

  const [selectedRhythmicConcept, setSelectedRhythmicConcept] = useState('');
  const [selectedMelodicConcept, setSelectedMelodicConcept] = useState('');

  let kinderSequence = [];
  let rhythmicSequence = [];
  let melodicSequence = [];

  conceptSequence.forEach((concept) => {
    if (concept.conceptType === 'kinder') {
      kinderSequence.push(concept);
    } else if (concept.conceptType === 'rhythm') {
      rhythmicSequence.push(concept);
    } else if (concept.conceptType === 'melody') {
      melodicSequence.push(concept);
    }
  });

  // EVENT HANDLERS
  const handleGenerateButtonClick = () => {
    navigate(`/lessonDisplay?melodicConcept=${selectedMelodicConcept}`);
  }

  return (
    <div>
      <h1>LESSON PLAN GENERATOR</h1>
      <div className="lessonPlanGrid">

        <div className="demographics">
          <h2>Student Demographics</h2>
          <h3>Grade</h3>
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <h3>Represented Languages</h3>
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
          <select
            value={selectedMelodicConcept}
            onChange={(e) => setSelectedMelodicConcept(e.target.value)}
          >
            <option value="">Select a Melodic Starting Point</option>
            {melodicSequence.map((concept) => (
              <option key={concept.id} value={concept.concept}>
                {concept.concept}
              </option>
            ))}
          </select>
          <h4>Rhythmic</h4>
          <select
            value={selectedRhythmicConcept}
            onChange={(e) => setSelectedRhythmicConcept(e.target.value)}
          >
            <option value="">Select a Rhythmic Starting Point</option>
            {rhythmicSequence.map((concept) => (
              <option key={concept.id} value={concept.concept}>
                {concept.concept}
              </option>
            ))}
          </select>
          <h3>Ending points:</h3>
          <h4>Melodic</h4>
          <h4>Rhythmic</h4>
        </div>

        <div className="conceptSequence">
          <h2>Concept Sequence</h2>
          <p>(modify)</p>
          <ul className="conceptList">
            {rhythmicSequence.map((concept) => (
              <li className="concept" key={concept.id}>
                {concept.concept}
              </li>
            ))}
          </ul>
          <ul className="conceptList">
            {melodicSequence.map((concept) => (
              <li className="concept" key={concept.id}>
                {concept.concept}
              </li>
            ))}
          </ul>
        </div>

      </div>
      <button onClick={handleGenerateButtonClick}>GENERATE!</button>
    </div>
  );
}

export default LessonPlanGenerator;
