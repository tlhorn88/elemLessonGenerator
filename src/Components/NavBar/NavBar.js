import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleRepertoireSearchClick = () => {
    navigate('/');
  };

  return (
    <div className="navBar">
      <ul className='navBarList'>
        <li><NavLink to="/" onClick={handleRepertoireSearchClick}>
            repertoire search
          </NavLink></li>
        <li>add new repertoire</li>
        <li>folk dances</li>
        <li>eurhythmics</li>
        <li>lesson plan generator</li>
        <li>
          <input type="search" placeholder="Search"></input>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
