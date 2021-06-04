import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FirebaseHelper from '../lib/FirebaseHelper';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [currentUser, setCurrentUser] = useState(undefined)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButtoon = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButtoon();
        FirebaseHelper.authChangedListener((user) => {
            setCurrentUser(user)
        })
    }, []);

    console.log('currentUser', currentUser)
    window.addEventListener('resize', showButtoon);

    function handleSignOut(e) {
        e.preventDefault();

        FirebaseHelper.signOut()

    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Edu<i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        {/*<li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>*/}
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Courses
                            </Link>
                        </li>
                        <li className='nav-item'>
                            {
                                !currentUser
                                && <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign up
                                    </Link>
                            }

                        </li>
                    </ul>
                    {button && !currentUser && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    {
                        currentUser
                        && (
                            <div className="fire-wrapper">
                                <span>{currentUser.displayName}</span>
                                <a href="#" onClick={handleSignOut}>Sign Out</a>
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
