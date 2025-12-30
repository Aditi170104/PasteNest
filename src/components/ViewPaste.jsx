import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ViewPaste.css'
const ViewPaste = () => {

  const{id}= useParams();

  const allPastes = useSelector((state)=>state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0];
  return (
    <div className='view-container'>
      <div className='view-title'>
        <input
        type='text' placeholder='enter title here'
        value={paste.title} disabled />
        <p>
          Read-only view
        </p>

      </div>

      <div className='view-content'>
        <div className="view-text">
          {paste.content}
        </div>
      </div>
      
    </div>
  )
}

export default ViewPaste
