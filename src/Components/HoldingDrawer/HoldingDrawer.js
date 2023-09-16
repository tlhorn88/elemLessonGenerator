import React from 'react';
import './HoldingDrawer.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromHolding } from '../../redux/actions';

function HoldingDrawer() {
  const selectedSongs = useSelector((state) => state.selectedSongs);
  const dispatch = useDispatch();

  const handleRemoveromHolding = (songTitle) => {
    dispatch(removeFromHolding(songTitle));
  };

  return (
    <div className={`holdingDrawer ${selectedSongs.length > 0 ? 'open' : ''}`}>
      <h2>Favorites</h2>
      <ul>
        {selectedSongs.map((songTitle, index) => (
          <div key={index}>
            <li>{songTitle}</li>
            <button onClick={() => handleRemoveromHolding(songTitle)}>x</button>
          </div>
        ))}
      </ul>
      {/* <button>View Song Packet</button> */}
    </div>
  );
}

export default HoldingDrawer;
