import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleRepertoireSearchClick = () => {
    navigate('/');
  };

  const handleTemplateSpaceClick = () => {
    navigate('TemplateWorkspace');
  };

  const handleLessonPlanGeneratorClick = () => {
    navigate('LessonPlanGenerator');
  };

  return (
    <div className="navBar">
      <ul className="navBarList">
        <li>
          <NavLink to="/" onClick={handleRepertoireSearchClick}>
            directory
          </NavLink>
        </li>
        <li>
          <NavLink to="TemplateWorkspace" onClick={handleTemplateSpaceClick}>
            template workspace
          </NavLink>
        </li>
        <li><NavLink to="LessonPlanGenerator" onClick={handleLessonPlanGeneratorClick}>
            lesson plan generator
          </NavLink></li>
        <li>
          <input type="search" placeholder="Search"></input>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
