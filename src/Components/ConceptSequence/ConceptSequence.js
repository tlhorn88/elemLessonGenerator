import './ConceptSequence.css';
import { useState } from 'react';

function ConceptSequence() {
  const [conceptSequence, changeConceptSequence] = useState([
    'tuneful singing',
    'beat',
    'loud v. soft',
    'high low chant',
    'fast slow',
    'high low melody',
    'rhythm long short',
    'qsd',
    'sm',
    'Z',
    'l',
    '2$',
    'd',
    'w',
    'r',
    'xxcc',
    'dP',
    '4$',
    'l,',
    'sxc',
    's,',
    'xcd',
    "d'",
    'a',
    'lP',
    'aqa',
    'f',
    'ra',
    't,',
    '3$',
    't',
    'gc',
    'ar',
  ]);
  return (
    <div>
      <h1>CONCEPT SEQUENCE</h1>
    </div>
  );
}

export default ConceptSequence;
