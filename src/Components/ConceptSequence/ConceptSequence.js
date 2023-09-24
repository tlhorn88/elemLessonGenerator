import './ConceptSequence.css';
import { useDispatch } from 'react-redux';
// import LessonPlanGenerator from '../LessonPlanGenerator/LessonPlanGenerator';
import { addConceptSequence } from '../../redux/actions.js'

function ConceptSequence() {
  const dispatch = useDispatch();

const conceptSequenceData = [
  ,
]

  dispatch(addConceptSequence(conceptSequenceData));

  return (
    <div>
      <h1>CONCEPT SEQUENCE</h1>
    </div>
  );
}

export default ConceptSequence;
