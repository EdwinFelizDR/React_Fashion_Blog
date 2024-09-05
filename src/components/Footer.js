import React from 'react'
import Nav from './Nav';

const navItems = [
   { name: "Home", href: "#" },
   { name: "Women's", href: "#" },
   { name: "Men's", href: "#" },
   { name: "On the Street", href: "#" },
   { name: "The Catwalk", href: "#" },
   { name: "AdWatch", href: "#" },
   { name: "About", href: "#" },
   { name: "Tips", href: "#" }
 ];
 

function Footer() {
  return (
<>
<div>
   <footer>
      <div className='navbottom'>
         <Nav items={navItems} />
      </div>
      <p className="copyright" >&copy; 2023 Your Company Name. All rights reserved.</p>
   </footer>
</div>
</>
  )
}

export default Footer