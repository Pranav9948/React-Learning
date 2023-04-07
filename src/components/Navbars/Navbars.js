import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

function Navbars() {

    const currentDate=new Date()
    const hours=currentDate.getHours()

    let mode;

    if(hours>12){

      mode="daymode"
    }

    else{

      mode="darkmode"
    }

    
 

  return (
    
    <nav className={`navbar ${mode} p-5`}>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbars
