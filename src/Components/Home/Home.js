import React from 'react';
import './Home.css';
import repDir from '../../repGood.json';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import headphones from '../../images/headphones.png';
import { useDispatch } from 'react-redux';
import { addToHolding } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();

  const searchCriteria = [
    'language',
    'scale',
    'focusSong',
    'subject',
    'tonalCenter',
    'ethnicOrigin',
    'range',
  ];


  const toneSetOptions = [
    'sol,',
    'la,',
    'ti,',
    'do',
    're',
    'mi',
    'fa',
    'sol',
    'la',
    'ti',
    "do'",
  ];

  const rhythmSetOptions = [
    'q',
    'sd',
    'Q',
    'w',
    'xxcc',
    'sxc',
    'xcd',
    'aqa',
    'ra',
    'gc',
    'ar',
  ];

  // STATE VARIABLES

  const [filters, setFilters] = useState({});
  const [gradeFilter, setGradeFilter] = useState([]);
  const [toneSetFilter, setToneSetFilter] = useState([]);
  const [rhythmSetFilter, setRhythmicSetFilter] = useState([]);

  // FILTERS THE SONGS BASED ON THE SELECTED CRITERIA
  const filteredSongs = repDir.filter(
    (song) =>
      Object.keys(filters).every((criteria) =>
        filters[criteria] ? song[criteria] === filters[criteria] : true
      ) &&
      (gradeFilter.length === 0 ||
        (song.grade &&
          song.grade.some((grade) => gradeFilter.includes(grade)))) &&
      (toneSetFilter.length === 0 ||
        (song.toneSet &&
          song.toneSet.length === toneSetFilter.length &&
          toneSetFilter.every((tone) => song.toneSet.includes(tone)))) &&
      (rhythmSetFilter.length === 0 ||
        (song.rhythmicElements &&
          song.rhythmicElements.length === rhythmSetFilter.length &&
          rhythmSetFilter.every((figure) => song.rhythmicElements.includes(figure))))
  );

  // EVENT HANDLERS
  const handleFilterChange = (criteria, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [criteria]: value !== '' ? value : null,
    }));
  };

  const handleGradeChange = (value) => {
    if (value === 'all') {
      setGradeFilter([]);
    } else {
      if (gradeFilter.includes(value)) {
        setGradeFilter((prevFilter) =>
          prevFilter.filter((grade) => grade !== value)
        );
      } else {
        setGradeFilter((prevFilter) => [...prevFilter, value]);
      }
    }
  };

  const handleToneSetChange = (tone) => {
    if (toneSetFilter.includes(tone)) {
      setToneSetFilter((prevFilter) => prevFilter.filter((t) => t !== tone));
    } else {
      setToneSetFilter((prevFilter) => [...prevFilter, tone]);
    }
  };

  const handleRhythmSetChange = (figure) => {
    if (rhythmSetFilter.includes(figure)) {
      setRhythmicSetFilter((prevFilter) => prevFilter.filter((f) => f !== figure));
    } else {
      setRhythmicSetFilter((prevFilter) => [...prevFilter, figure]);
    }
  }

  // const handleFilterToggle = (criteria, element) => {
  //   if (filters[criteria] && filters[criteria].includes(element)) {
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       [criteria]: prevFilters[criteria].filter((el) => el !== element),
  //     }));
  //   } else {
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       [criteria]: [...(prevFilters[criteria] || []), element],
  //     }));
  //   }
  // };

  const handleResetClick = () => {
    setFilters({});
    setGradeFilter([]);
    setToneSetFilter([]);
  };

  const handleAddToHoldingClick = (songTitle) => {
    dispatch(addToHolding(songTitle));
  };

  return (
    <div className="home">
      <div className="parent">
        <div className="div1">
          <p>
            Showing <em>{filteredSongs.length}</em> of <em>{repDir.length}</em>{' '}
            songs in the collection.
          </p>
        </div>

        <div className="div2">
          <h3>refine search</h3>
          <button onClick={handleResetClick}>reset</button>

          <p>grade</p>
          <label>
            <input
              type="checkbox"
              value="all"
              checked={!gradeFilter.length}
              onChange={() => setGradeFilter([])}
            />
            All
          </label>

          {Array.from({ length: 6 }, (_, index) => index).map((grade) => (
            <label key={grade}>
              <input
                type="checkbox"
                value={grade}
                checked={gradeFilter.includes(grade)}
                onChange={() => handleGradeChange(grade)}
              />
              {grade}
            </label>
          ))}

          <p>tone set</p>
          {toneSetOptions.map((tone) => (
            <label key={tone}>
              <input
                type="checkbox"
                value={tone}
                checked={toneSetFilter.includes(tone)}
                onChange={() => handleToneSetChange(tone)}
              />
              {tone}
            </label>
          ))}

          <p>rhythm set</p>
          {rhythmSetOptions.map((figure) => (
            <label key={figure}>
              <input
                type="checkbox"
                value={figure}
                checked={rhythmSetFilter.includes(figure)}
                onChange={() => handleRhythmSetChange(figure)}
                />
                {figure}
            </label>
          ))}

          {/* Maps through other fields in json (range, language, etc.) */}
          {searchCriteria.map((criteria) => (
            <React.Fragment key={criteria}>
              <p>{criteria}</p>
              <select
                id={`${criteria}Filter`}
                value={filters[criteria] || ''}
                onChange={(e) => handleFilterChange(criteria, e.target.value)}
              >
                <option value="">All</option>
                {Array.from(new Set(repDir.map((song) => song[criteria]))).map(
                  (option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                )}
              </select>
            </React.Fragment>
          ))}
        </div>

        <div className="div4">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Recording</th>
                  <th>Game</th>
                  <th>Add to holding</th>
                </tr>
              </thead>
              <tbody>
                {filteredSongs.map((song) => (
                  <tr key={song.id}>
                    <td>
                      <NavLink
                        state={{
                          songData: song,
                        }}
                        to={{ pathname: '/songDisplay' }}
                      >
                        {song.songTitle}
                      </NavLink>
                    </td>
                    <td>
                      {song.recording ? (
                        <img className="headphonesGame" src={headphones} />
                      ) : null}
                    </td>
                    <td>{song.game ? 'x' : null}</td>
                    <td>
                      <button
                        onClick={() => handleAddToHoldingClick(song.songTitle)}
                      >
                        Add to holding
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
