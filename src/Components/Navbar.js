import React from 'react'
import "./Navbarstyles.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='NavbarIems'>
           <div className='navbar-header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' 
                className='navbar-logo'
            />
            <h1 className='navbar-headername'>SCHOOL
            </h1>
            </div>

            <ul className='nav-menu'>
               <Link to='/'>

               </Link>
               <Link to='/downloadapp'><li className='nav-links-download'><a href='#'> Download App </a>
                 </li>
               </Link>
               <Link to='/Admissionenquiryform'><li className='nav-links-enqiry'><a href='#'>Admission Enquiry Form </a>
                 </li>
               </Link>
               <Link to='/onlineadmission'><li className='nav-links-admission'><a href='#'>Online Admission</a>
                 </li>
               </Link>
               <Link to='/download'><li className='nav-links'><a href='#'>Downloads</a>
                 </li>
               </Link>
               <Link to='/newsevents'><li className='nav-links'><a href='#'>News & Events</a>
                 </li>
               </Link>
               <Link to='/faqs'><li className='nav-links'><a href='#'>FAQs</a>
                 </li>
               </Link>
               <Link to='/contact'><li className='nav-links'><a href='#'>Contact</a>
                 </li>
               </Link>
               <Link to='/login'>
               <li className='btn-login'>
               <button className='login-btn'>Login</button>
               </li>
               </Link>
            </ul>
        </nav>
        <nav className='Navbar-2-Iems'>
        <ul className='nav-2-menu'>
                <Link to='/aboutus'><li className='nav-2-links'><a href='#'>ABOUT US</a>
                 </li>
                </Link>
                <Link to='/preprimary'><li className='nav-2-links'><a href='#'>PRE-PRIMARY</a>
                 </li>
                </Link>
                <Link to='/primary'><li className='nav-2-links'><a href='#'>PRIMARY</a>
                 </li>
                </Link>
                <Link to='/highschool'><li className='nav-2-links'><a href='#'>HIGH SCHOOL</a>
                 </li>
                </Link>
                <Link to='/studentlife'><li className='nav-2-links'><a href='#'>STUDENT LIFE</a>
                 </li>
                </Link>
                <Link to='/achievements'><li className='nav-2-links'><a href='#'>ACHIEVEMENTS</a>
                 </li>
                </Link>
                <Link to='/facilities'><li className='nav-2-links'><a href='#'>FACILITIES</a>
                 </li>
                </Link>
                <Link to='/uniforms'><li className='nav-2-links'><a href='#'>UNIFORMS</a>
                 </li>
                </Link>
                <Link to='/gallery'><li className='nav-2-links'><a href='#'>GALLERY</a>
                 </li>
                </Link>
                <Link to='/careers'><li className='nav-2-links'><a href='#'>CAREERS</a>
                 </li>
                </Link>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
