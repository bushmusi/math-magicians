import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      title: 'Quote',
      path: '/quote',
    },
  ];

  return (
    <nav className="navContainer">
      <div>
        <NavLink to="/" style={{ fontWeight: 'bolder' }}>Math Magicians</NavLink>
      </div>
      <ul className="linkList">
        {
                    links.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          to={item.path}
                          activeClassName="active-link"
                          exact
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))
                }
      </ul>
    </nav>
  );
};

export default Header;
