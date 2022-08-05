import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineProject } from 'react-icons/ai';
import { ImTicket, ImExit, ImEnter } from 'react-icons/im';
import { MdDashboard } from 'react-icons/md';
// import { useSelector, useDispatch } from 'react-redux';
import Logo from './UI/Logo';
// TODO:
// Get role from redux state
// based on role (Admin, Project Manager, Submitter, Developer) hide links.
// swap auth links, show pending on logged in or not
const NavBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = true;
  // const isAuthenticated = false;
  const status = {
    roleOne: 'Admin',
    roleTwo: 'Project Manager',
    roleThree: 'Developer'
  }
  let admin = status.roleOne;
  // let admin = status.roleThree;
  let role = "Admin";
  const adminLinks = (
    <li className="nav__link-item">
      <div className="nav__link-group">
        <div className="nav__link-icon">
          <FaPlus />
        </div>
        <Link to="/" className='nav__link'>
          New Project
        </Link>
      </div>
    </li>
  );
  
  const authLinks = (<>
    <li className="nav__link-item">
      <div className="nav__link-group">
        <div className="nav__link-icon">
          <MdDashboard />
        </div>
        <Link to="/" className='nav__link'>
          Dashboard
        </Link>
      </div>
    </li>
    <li className="nav__link-item">
      <div className="nav__link-group">
        <div className="nav__link-icon">
          <AiOutlineProject />
        </div>
        <Link to="/" className='nav__link'>
          My Projects
        </Link>
      </div>
    </li>
    <li className="nav__link-item">
      <div className="nav__link-group">
        <div className="nav__link-icon">
          <ImTicket />
        </div>
        <Link to="/" className='nav__link'>
          My Tickets
        </Link>
      </div>
    </li>
  </>);

  return (
    <header className="nav">
      <nav className='nav__menu'>
        <Logo />
        <ul className="nav__links">
          {isAuthenticated && authLinks}
          {isAuthenticated && role === admin && adminLinks}
          {isAuthenticated ? (
            <li className="nav__link-item">
              <div className="nav__link-group">
                <div className="nav__link-icon">
                  <ImExit />
                </div>
                <Link to="/" className='nav__link'>
                  Sign Out
                </Link>
              </div>
            </li>
          ) : (
            <li className="nav__link-item">
              <div className="nav__link-group">
                <div className="nav__link-icon">
                  <ImEnter />
                </div>
                <Link to="/" className='nav__link'>
                  Sign In
                </Link>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
export default NavBar;