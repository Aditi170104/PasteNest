import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const[title, setTitle] = useState('');
    const[value, setValue] = useState('');
    const[searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=> state.paste.pastes); //to access particular paste's content and title while updating

    //for updation of paste:
    useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p)=>p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
    }, [pasteId])
        
 
    function createPaste(){
        const paste={
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if(pasteId){
            //update paste
            dispatch(updateToPastes(paste));
        }
        else{
            //create paste
            dispatch(addToPastes(paste));
        }

        //after creation/updation:
        setTitle('');
        setValue('');
        setSearchParams({});
    }

  return (
    <div className='home-container'>
      <div className='title-container'>
        <input
        type='text' placeholder='enter title here'
        value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button
            onClick={createPaste}
        >
            {
                pasteId ? "Update Paste" : "Create Paste"
            } 
        </button>
      </div>

      <div className='content-container'>
        <textarea
            value={value}
            placeholder='enter content here'
            onChange={(e)=>setValue(e.target.value)}
            rows={5}
        >
        </textarea>
      </div>
      
    </div>
  )
}

export default Home
