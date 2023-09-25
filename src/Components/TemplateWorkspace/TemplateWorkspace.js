import './TemplateWorkspace.css';
import { useSelector } from 'react-redux';


function TemplateWorkspace() {
  const selectedSongs = useSelector((state) => state.selectedSongs.selectedSongs);
  return (
    <div>
      <h1>TEMPLATE WORKSPACE</h1>
      <ul>
        {selectedSongs.map((songTitle, index) => (
          <div key={index}>
            <li>{songTitle}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TemplateWorkspace;