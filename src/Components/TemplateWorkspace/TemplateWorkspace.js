import './TemplateWorkspace.css';
import { useSelector } from 'react-redux';


function TemplateWorkspace() {
  const selectedSongs = useSelector((state) => state.selectedSongs.selectedSongs);

  const lessonTemplate = useSelector((state) => state.lessonTemplate.lessonTemplate);
    console.log(lessonTemplate);
  return (
    <div>
      <h1>TEMPLATE WORKSPACE</h1>
      <button>USE THIS TEMPLATE (nagivates to LP generator)</button>
      <button>Save this template</button>

      <ul className='template1'>
          {lessonTemplate.map((lessonTemplate, index) => (
            <div className='templateComponent'>
              <li>{lessonTemplate.lessonComponent}</li>
              <li>{lessonTemplate.componentDescription}</li>
            </div>
          ))}
      </ul>
    </div>
  )
}

export default TemplateWorkspace;