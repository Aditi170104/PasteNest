import './Paste.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes, resetAllPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

const Paste = () => {

  const pastes = useSelector((state)=> state.paste.pastes);
  // console.log(pastes); 
  const[searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste)=>
  paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  function handleCopy(content){
    navigator.clipboard.writeText(content);
    toast.success("Copied to Clipboard");
  }

  function handleShare(paste) {
  const shareUrl = `${window.location.origin}/pastes/${paste._id}`;

  if (navigator.share) { //exists only if the browser supports native sharing
    navigator.share({ //returns a promise
      title: paste.title,
      text: `${paste.title}\n\n${paste.content}\n\nView here: ${shareUrl}`,
    })

    .then(() => toast.success("Paste shared successfully"))
    .catch(() => toast.error("Sharing cancelled"));
  } else {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard");
  }
}

function handleResetAll() {
  const confirmClear = window.confirm(
    "Are you sure you want to delete all pastes?"
  );

  if (confirmClear) {
    dispatch(resetAllPastes());
    toast.success("All pastes cleared");
  }
}

function formatDate(isoString) {
  return new Date(isoString).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

  return (
    <div className='paste-container'>
      <div className="search-container">
        <input type='search' placeholder='search pastes here'
        value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button onClick={handleResetAll} disabled={pastes.length === 0} >Delete All Pastes</button>
      </div>

      <div className='allPastes-container'>
        {
          filteredData.length > 0 && 
          filteredData.map(
            (paste)=>{
              return(
                <div key={paste?._id} className='individual-paste'>
                  <div className='paste-title'>
                    {paste.title}
                  </div>  
                  <div className='paste-content'>
                    {paste.content}
                  </div>
                  <div className='paste-buttons'>
                    <button>
                      <Link to={`/?pasteId=${paste?._id}`} className='links'> <i class="fa-regular fa-pen-to-square"></i> </Link>
                    </button>
                    <button> 
                      <Link to={`/pastes/${paste?._id}`} className='links'> <i class="fa-regular fa-eye"></i> </Link>
                    </button>
                    <button onClick={()=>handleDelete(paste?._id)}> <i class="fa-solid fa-trash"></i> </button>  
                    <button onClick={()=>handleCopy(paste.content)}> <i class="fa-regular fa-copy"></i> </button>
                    <button onClick={() => handleShare(paste)}> <i class="fa-solid fa-share-nodes"></i> </button>

                  </div>
                  <div className='paste-date'>
                    {formatDate(paste.createdAt)}
                  </div>
    
                </div>  
              )
            }  
          )
        }
      </div>
    </div>
  )
}

export default Paste
