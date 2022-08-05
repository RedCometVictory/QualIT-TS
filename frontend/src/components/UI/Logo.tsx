import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="nav__logo-container">
      <div className="nav__logo">
        <h1>
          <Link to="/" className="nav__logo-icon">
            Qual<span>I</span>T
          </Link>
        </h1>
      </div>
      <div className="nav__line"></div>
    </div>
  )
}
export default Logo;