import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {

    let usenavigate = useNavigate();

    let b =()=>{ 
        //alert('profile');
        usenavigate('/dasbord');
    }
  return (
      <>
        <div>Profile</div>
        <button onClick={b}>dasbord  page to jump</button>
        <Link to="/dasbord">daspord</Link>
      </>
    
  )
}
