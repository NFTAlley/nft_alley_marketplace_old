import React,{useState,useEffect} from 'react'
import '../NavBar/NavBar.css';
import {Col} from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const NavBar = ({toggle,setToggle}) => {
  const [show,handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>20)
        {
            handleShow(true)
        }
        else
        {
            handleShow(false)
        }
    });
    return ()=>{
        window.removeEventListener('scroll')
    }
},[])

const changeToggle=()=>{
    setToggle(!toggle)
}
    return (
        <Col className={`nav ${show && 'nav_move_color'}`}>
        <a href="#jh"><img src={process.env.PUBLIC_URL + toggle ?"NFT_Alley_Final.jpg":"NFT_Alley_Final.jpg"} alt="" className='nav_brandName' /></a>
        <div className="nav_header">
          <div className="nav_search">
          <SearchIcon className="nav_SearchIcon"/>
            <input type="text" placeholder="Search" className="nav_input" />
          </div>
          </div>
          
          <ul className='nav_list'>
          <li> <a href="#jh">Marketplace</a></li> 
          <li><a href="#kj">How its Work </a></li>
          <li><a href="#hg">FAQ</a></li>
          <li><a href="#jh">Community</a></li>
          </ul>
          <button className='nav_btn'>Connect</button>
          <IconButton  id='toggle_change'  onClick={changeToggle}>
            <Brightness2Icon/>
          </IconButton>
        </Col>
    )
}

export default NavBar
