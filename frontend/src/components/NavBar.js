import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillCloseSquare } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';

function NavBar() {
  const { pathname } = useLocation();
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  function logOut() {
    if (isLogged) {
      localStorage.removeItem('token')
      setIsLogged(false)
    }
  }

  function openNav() {
    document.getElementsByTagName('nav')[0].setAttribute('class', 'sidebar');
    document
      .getElementsByClassName('nav-tools')[0]
      .setAttribute('class', 'temp');
    document
      .getElementsByClassName('mobile-nav-menu')[0]
      .setAttribute('class', 'mobile-nav-menu-opened');
    setIsNavOpened(true);
  }

  function closeNav() {
    document
      .getElementsByClassName('temp')[0]
      .setAttribute('class', 'nav-tools');
    document.getElementsByTagName('nav')[0].setAttribute('class', 'nav-menu');
    document
      .getElementsByClassName('mobile-nav-menu-opened')[0]
      .setAttribute('class', 'mobile-nav-menu');
    setIsNavOpened(false);
  }

  useEffect(() => {
    try {
      document
        .getElementById(pathname)
        .setAttribute('class', 'current-nav-section');
    } catch (e) {
      document.getElementById('/').setAttribute('class', 'current-nav-section');
    }
  }, [pathname]);

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (token && isLogged === false) {
        setIsLogged(true)
      }
    } catch (e) {
      console.log(e)
    }
  }, [isLogged])

  return (
    <nav className="nav-menu">
      <section className="nav-user-mobile">
        {isNavOpened && isLogged && <span>icon</span>}
      </section>
      <Link to="/" className="nav-title">
        <h2>Blog Posts</h2>
      </Link>
      <section className="nav-tools">
        <ul>
          <Link to="/">
            <li id="/">Feed</li>
          </Link>
          {isLogged ? (
            <>
              <Link to="/posts/create">
                <li id="/posts/create">Criar Post</li>
              </Link>
              <Link to="/me/posts">
                <li>Meus Posts</li>
              </Link>
              <Link to="/me/favorites">
                <li>Favoritos</li>
              </Link>
              <button
                type="button"
                onClick={logOut}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <li>Fazer Login</li>
              </Link>
              <Link to="/signup">
                <li id="/signup">Criar Perfil</li>
              </Link>
            </>
          )}
        </ul>
      </section>
      <section
        className="mobile-nav-menu"
        onClick={isNavOpened ? closeNav : openNav}
      >
        {isNavOpened ? (
          <AiFillCloseSquare className="nav-icon" />
        ) : (
          <HiDotsVertical className="nav-icon" />
        )}
      </section>
    </nav>
  );
}

export default NavBar;
