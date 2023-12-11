import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import { ProviderItem } from '../types/types';


function Navbar({ providerItens }: { providerItens: ProviderItem[] }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            INNOSCRIPTA <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {
              providerItens.map((provider, index) => {
                return (
                  <li key={index} className='nav-item'>
                    <Link to={`/provider/${provider.id}`} className='nav-links' onClick={closeMobileMenu}>
                      {provider.webName}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGOUT</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar