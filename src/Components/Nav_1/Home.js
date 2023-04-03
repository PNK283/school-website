import React from 'react'
import './Nav1.css';
import Main from '../Slider/Main';
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Home = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
    position:"relative",
  };
  return (
    <div>
     <div>
      <center>
      <div style={containerStyles}>
        <Main slides={slides} />
        <div className='container_icons'>
               <BsFacebook/>
        </div>
      </div>
      </center>
      </div>
      <div className='dropdown_select'>
          <select className='dropdown_options_selectboard'>
              <option value="select Board">Select Board</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="icse/cbse">CBSE/ICSE</option>
              <option value="state">STATE</option>
          </select>
          <select className='dropdown_options_selectstate'>
              <option value="select Board">Select State</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="icse/cbse">CBSE/ICSE</option>
              <option value="state">STATE</option>
          </select>
          <select className='dropdown_options_selectcity'>
              <option value="select Board">Select City</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="icse/cbse">CBSE/ICSE</option>
              <option value="state">STATE</option>
          </select>
          <select className='dropdown_options_selectbranch'>
              <option value="select Board">Select Branch</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="icse/cbse">CBSE/ICSE</option>
              <option value="state">STATE</option>
          </select>
            <div>
              <input type="search" className='search_field' placeholder='Find School'/>
              <div className='search_icon'><AiOutlineSearch/></div>
            </div>
      </div>
      <div className='achievements_container'>
               <h1>ACHIEVEMENTS</h1>
               <div className='Academics_container'>
                      <img src=''></img>
               </div>
      </div>
    </div>
  );
}

export default Home
