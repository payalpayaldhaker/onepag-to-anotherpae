import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Dasbord() {

    let usenavigate = useNavigate(()=>{ 
        //alert('okok');
    }); 

    let a =()=>{ 
       // alert('dasbord');
        usenavigate('/profile');
;    }
  return (

    
    <>
    <div>dasbord</div>
    <button onClick={a}>profile  page to jump</button>
    <Link to="/profile">profile</Link>
  </>

  )
}
