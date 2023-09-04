import React from 'react';
import './SongDisplay.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToHolding } from '../../redux/actions';

function SongDisplay() {
  const dispatch = useDispatch();
  const location = useLocation();
  const songData = location.state;
  console.log(songData);

  const handleAddToHoldingClick = () => {
    dispatch(addToHolding(songData.songData.songTitle));
  };

  return (
    <div>
      <div className="songDisplay">
        <div className="titleBar">
          {songData.songData.csp && (
            <div className="csp">CSP:{songData.songData.csp}</div>
          )}
          <h1 className="title">{songData.songData.songTitle}</h1>

          {songData.songData.focusSong && (
            <p>focus song: {songData.songData.focusSong}</p>
          )}
          {songData.songData.mm && (
            <div className="mm">q = {songData.songData.mm}</div>
          )}
        </div>
        <img className="score" src={songData.songData.score} />

        {songData.songData.gameDirections && (
          <p>game directions: {songData.songData.gameDirections}</p>
        )}
        {songData.songData.notes && (
          <div>
            <p className="categoryName">notes:</p>
            {songData.songData.notes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        )}
        <button onClick={handleAddToHoldingClick}>add to holding</button>

        <div className="analysis">
          <div className="misc">
            {songData.songData.ethnicOrigin && (
              <div>
                <p className="categoryName">ethnic origin:</p>
                {songData.songData.ethnicOrigin.map((origin, index) => (
                  <p key={index}>{origin}</p>
                ))}
              </div>
            )}
            {songData.songData.grade && (
              <div>
                <p className="categoryName">grade level:</p>
                <p>{songData.songData.grade}</p>
              </div>
            )}
            {songData.songData.subject && (
              <div>
                <p className="categoryName">subject:</p>
                {songData.songData.subject.map((subject, index) => (
                  <p key={index}>{subject}</p>
                ))}
              </div>
            )}
          </div>

          <div className="melody">
            {songData.songData.toneSet && (
              <div>
                <p className="categoryName">tone set:</p>
                <p>{songData.songData.toneSet}</p>
              </div>
            )}
            {songData.songData.scale && (
              <div>
                <p className="categoryName">scale:</p>
                <p>{songData.songData.scale}</p>
              </div>
            )}
          </div>

          <div className="rhythm">
            {songData.songData.rhythmicSpecialties && (
              <div>
                <p className="categoryName">rhythmic specialty</p>
                {songData.songData.rhythmicSpecialties.map((rhythm, index) => (
                  <p className="musEd" key={index}>
                    {rhythm}
                  </p>
                ))}
              </div>
            )}

            <p className="categoryName">rhythmic elements</p>
            <p className="categoryName">rhythmic motives</p>
          </div>
        </div>
        {songData.songData.source && (
          <div>
            <p className="categoryName">source:</p>
            {songData.songData.source.map((source, index) => (
              <p key={index}>{source}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SongDisplay;
