import './LessonDisplay.css';
import { useLocation } from 'react-router-dom';
import repDir from '../../repGood2.json';


function LessonDisplay() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedMelodicConcept = searchParams.get('melodicConcept');

  // SEARCHES FOR SONG TITLE THAT CAN PRESENT CONCEPT
  const findFocusSong = (concept) => {
    for (const song of repDir) {
      if (song.function.melodic.presentation.includes(concept)) {
        return song.songTitle;
      }
    }
    return "No matching song found.  Go on a repertoire hunt!"
  }

  

  const selectedSongTitle = findFocusSong(selectedMelodicConcept);

  return (
    <div className='lessonDisplay'>
      <h1>LESSON DISPLAY</h1>
      <h2>Concept:</h2>
      <p>{selectedMelodicConcept}</p>
      <h3>Focus rep:</h3>
      <p>{selectedSongTitle}</p>
      <h3>Practice rep:</h3>
    </div>
  )
}

export default LessonDisplay;