import React from 'react';
import './HoldingDrawer.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromHolding } from '../../redux/actions';

function HoldingDrawer() {
  const selectedSongs = useSelector((state) => state.selectedSongs.selectedSongs);

  const dispatch = useDispatch();

  const handleRemoveromHolding = (songTitle) => {
    dispatch(removeFromHolding(songTitle));
  };

  return (
    <div className={`holdingDrawer ${selectedSongs.length > 0 ? 'open' : ''}`}>
      <h2>Favorites</h2>
      <p>WILL BE A HOLDING GROUND FOR USER FAVORITES.</p>
      <p>Eventually, these songs will take priority over other potential songs in lesson plan structure.</p>
      <ul>
        {selectedSongs.map((songTitle, index) => (
          <div key={index}>
            <li>{songTitle}</li>
            <button onClick={() => handleRemoveromHolding(songTitle)}>x</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HoldingDrawer;
