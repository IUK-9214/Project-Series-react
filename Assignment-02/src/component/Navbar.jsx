
import { Link } from 'react-router'

function Navbar() {
  return (
   <nav class='navbar bg-dark'>
        <div class="container">
             <h1 class='logo lg-heading text-light'>WT</h1>
             <ul  class='nav-items'>
                <li ><Link  to={"/"}>Home</Link></li>
               <li > <Link  to={"/About"}>About</Link></li>
               <li  >  <Link  to={"/Contact"}>Contact</Link></li>
             </ul>
        </div>
    </nav>
  )
}

export default Navbar