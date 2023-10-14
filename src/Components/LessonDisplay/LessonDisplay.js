import './LessonDisplay.css';
import { useLocation } from 'react-router-dom';
import repDir from '../../repGood2.json';
// import { shuffleArray, selectRandomItems } from '../../utilities';
import { updatePracticeSongs } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function LessonDisplay() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedMelodicConcept = searchParams.get('melodicConcept');
  // const selectedPracticeSongs = useSelector((state) => state.practiceSongs.selectedPracticeSongs);
  const [selectedPracticeSongs, setSelectedPracticeSongs] = useState([]);
  const selectedSongsInHolding = useSelector(
    (state) => state.selectedSongs.selectedSongs
  );

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const initialSelectedPracticeSongs = Array(5).fill('');
  const [selectedPracticeSongsArray, setSelectedPracticeSongsArray] = useState(
    initialSelectedPracticeSongs
  );

  const [selectedPracticeSongIndex, setSelectedPracticeSongIndex] =
    useState(-1);
  const [dropDownIndex, setDropDownIndex] = useState(-1);

  useEffect(() => {
    dispatch(updatePracticeSongs(selectedPracticeSongsArray));
  }, [selectedPracticeSongsArray, dispatch]);

  const [selectedPracticeSong, setSelectedPracticeSong] = useState('');

  // EVENT HANDLERS
  const handleMoreOptionsButtonClick = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const handlePracticeSongChange = (songTitle) => {
    if (!selectedPracticeSongs.includes(songTitle)) {
      const updatedPracticeSongs = [...selectedPracticeSongs, songTitle];
      setSelectedPracticeSongs(updatedPracticeSongs);

      dispatch(updatePracticeSongs(updatedPracticeSongs));
      setShowMoreOptions(true);
      setDropDownIndex(-1);
    }
  };

  const handleSelectedPracticeSongChange = (selectedSongTitle, index) => {
    const updatedPracticeSongsArray = [...selectedPracticeSongsArray];
    updatedPracticeSongsArray[index] = selectedSongTitle;
    setSelectedPracticeSongsArray(updatedPracticeSongsArray);

    // updatePracticeSongTitles();

    const updatedPracticeSongTitles = [...practiceSongTitles];
    updatedPracticeSongTitles[index] = selectedSongTitle;
    setPracticeSongTitles(updatedPracticeSongTitles);
    console.log(practiceSongTitles);
    setDropDownIndex(-1);
  };

  const updatePracticeSongTitles = () => {
    const updatedPracticeSongsTitles = selectedPracticeSongsArray.map((title) =>
      title && title !== '' ? title : ''
    );
    setPracticeSongTitles(updatedPracticeSongsTitles);
  };

  // SEARCHES FOR SONG TITLE THAT CAN PRESENT CONCEPT
  const findFocusSong = (concept, selectedSongs) => {
    for (const songTitle of selectedSongs) {
      const matchingSong = repDir.find((song) => song.songTitle === songTitle);
      if (
        matchingSong &&
        matchingSong.function.melodic.presentation.includes(concept)
      ) {
        return songTitle;
      }
    }
    const matchingSongs = repDir.filter((song) =>
      song.function.melodic.presentation.includes(concept)
    );

    if (matchingSongs.length === 0) {
      return 'No matching song found.  Go on a repertoire hunt!';
    }

    return matchingSongs[0].songTitle;
  };

  const focusSong = findFocusSong(
    selectedMelodicConcept,
    selectedSongsInHolding
  );

  // SEARCHES FOR LIST OF PRACTICE SONGS FOR SELECTED CONCEPT, EXCLUDING THE FOCUS SONG
  const findMatchingPracticeSongs = (concept, focusSong, selectedSongs) => {
    const matchingSongTitles = [];

    for (const songTitle of selectedSongs) {
      const matchingSong = repDir.find((song) => song.songTitle === songTitle);
      if (
        matchingSong &&
        matchingSong.function.melodic.practice.includes(concept) &&
        songTitle !== focusSong
      ) {
        matchingSongTitles.push(songTitle);
      }
    }

    // return matchingSongTitles;

    const additionalSongsNeeded = 5 - matchingSongTitles.length;

    if (additionalSongsNeeded <= 0) {
      return matchingSongTitles;
    }

    const remainingMatchingSongs = repDir.filter((song) =>
      song.function.melodic.practice.includes(concept)
    );

    const uniqueRemainingSongTitles = remainingMatchingSongs
      .filter((song) => !matchingSongTitles.includes(song.songTitle))
      .map((song) => song.songTitle);

    const selectedRemainingSongTitles = uniqueRemainingSongTitles.slice(
      0,
      additionalSongsNeeded
    );

    return matchingSongTitles.concat(selectedRemainingSongTitles);
  };

  const [practiceSongTitles, setPracticeSongTitles] = useState(
    findMatchingPracticeSongs(
      selectedMelodicConcept,
      focusSong,
      selectedSongsInHolding
    )
  );

  console.log('selectedPracticeSongsArray:', selectedPracticeSongsArray);
  console.log('selectedMelodicConcept:', selectedMelodicConcept);
  console.log('focusSong:', focusSong);
  console.log('selectedSongsInHolding:', selectedSongsInHolding);
  console.log('practiceSongTitles:', practiceSongTitles);

  const availablePracticeSongs = repDir
    .filter(
      (song) =>
        song.function.melodic.practice.includes(selectedMelodicConcept) &&
        song.songTitle !== focusSong &&
        !practiceSongTitles.includes(song.songTitle)
    )
    .map((song) => song.songTitle);

  return (
    <div className="lessonDisplay">
      <h1>LESSON DISPLAY</h1>
      <h2>Concept:</h2>
      <p>{selectedMelodicConcept}</p>
      <h3>Focus rep:</h3>
      <p>
        {focusSong}
        <button onClick={handleMoreOptionsButtonClick}>...</button>
      </p>
      <h3>Practice rep:</h3>

      <ul className="practiceRep">
        {practiceSongTitles.map((title, index) => (
          <li key={index}>
            {dropDownIndex === index ? (
              <select
                value={selectedPracticeSongsArray[index]}
                onChange={(e) =>
                  handleSelectedPracticeSongChange(e.target.value, index)
                }
                onBlur={() => setDropDownIndex(-1)}
              >
                <option value={selectedPracticeSongsArray[index] || title} className="option-selected">
                  {selectedPracticeSongsArray[index] || title}
                </option>
                {availablePracticeSongs.map((songTitle, idx) => (
                  <option key={idx} value={songTitle}>
                    {songTitle}
                  </option>
                ))}
              </select>
            ) : (
              <div className='songAndButtonWrapper'>
                <p>{title}</p>
                <button onClick={() => setDropDownIndex(index)}>...</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LessonDisplay;
