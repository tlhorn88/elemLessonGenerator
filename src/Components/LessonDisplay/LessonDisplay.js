import './LessonDisplay.css';
import { useLocation } from 'react-router-dom';
import repDir from '../../repGood2.json';
import { shuffleArray, selectRandomItems } from '../../utilities';

function LessonDisplay() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedMelodicConcept = searchParams.get('melodicConcept');

  // SEARCHES FOR SONG TITLE THAT CAN PRESENT CONCEPT
  const findFocusSong = (concept) => {
    const matchingSongs = [];
    for (const song of repDir) {
      if (song.function.melodic.presentation.includes(concept)) {
        matchingSongs.push(song.songTitle);
      }
    }
    if (matchingSongs.length === 0) {
      return 'No matching song found.  Go on a repertoire hunt!';
    }
    return selectRandomItems(matchingSongs, 1)[0];
  };
  const focusSongTitle = findFocusSong(selectedMelodicConcept);

  // SEARCHES FOR LIST OF PRACTICE SONGS FOR SELECTED CONCEPT
  const findMatchingPracticeSongs = (concept) => {
    const matchingSongs = [];
    for (const song of repDir) {
      if (
        song.function.melodic.practice.includes(concept) &&
        song.songTitle !== focusSongTitle
      ) {
        matchingSongs.push(song.songTitle);
      }
    }
    return matchingSongs;
  };

  const matchingSongs = findMatchingPracticeSongs(selectedMelodicConcept);
  const randomizedPracticeSongs = shuffleArray(
    selectRandomItems(matchingSongs, 5)
  );

  return (
    <div className="lessonDisplay">
      <h1>LESSON DISPLAY</h1>
      <h2>Concept:</h2>
      <p>{selectedMelodicConcept}</p>
      <h3>Focus rep:</h3>
      <p>{focusSongTitle}</p>
      <h3>Practice rep:</h3>
      <ul className="practiceRep">
        {randomizedPracticeSongs.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default LessonDisplay;
