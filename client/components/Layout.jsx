import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
 <>
 <img src='/Kyo.jpg' width="100px"/>
 
 <h1>My Portfolio</h1>

 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link> | <Link to="/counter">Counter</Link> | <Link to="/rating">Rating</Link>
 </nav>
 <br/>
 <br/> 
 <hr/>
 
</>
 
 );
}
