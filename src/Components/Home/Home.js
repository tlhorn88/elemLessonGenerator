import React from 'react';
import './Home.css';
// import repDir from '../../repGood.json';
import repDir from '../../repGood2.json';
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
    'subject',
    'tonalCenter',
    'ethnicOrigin',
    'range',
  ];

  // STATE VARIABLES

  const [filters, setFilters] = useState({});
  const [toneSetFilter, setToneSetFilter] = useState([]);
  const [rhythmSetFilter, setRhythmicSetFilter] = useState([]);

  // FILTERS THE SONGS BASED ON THE SELECTED CRITERIA
  const filteredSongs = repDir.filter(
    (song) =>
      Object.keys(filters).every((criteria) =>
        filters[criteria] ? song[criteria] === filters[criteria] : true
      ) &&
      (toneSetFilter.length === 0 ||
        (song.toneSet &&
          song.toneSet.length === toneSetFilter.length &&
          toneSetFilter.every((tone) => song.toneSet.includes(tone))))
    // &&
    // (rhythmSetFilter.length === 0 ||
    //   (song.rhythmSet &&
    //     song.rhythmSet.length === rhythmSetFilter.length &&
    //     rhythmSetFilter.every((figure) => song.rhythmSet.includes(figure))))
  );

  // EVENT HANDLERS
  const handleFilterChange = (criteria, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [criteria]: value !== '' ? value : null,
    }));
  };

  // const handleRhythmSetChange = (figure) => {
  //   if (rhythmSetFilter.includes(figure)) {
  //     setRhythmicSetFilter((prevFilter) => prevFilter.filter((f) => f !== figure));
  //   } else {
  //     setRhythmicSetFilter((prevFilter) => [...prevFilter, figure]);
  //   }
  // }

  const handleResetClick = () => {
    setFilters({});
    // setToneSetFilter([]);
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
                  <th>Add to Known Songs</th>
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
