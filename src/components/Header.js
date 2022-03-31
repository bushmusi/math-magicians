import React from 'react';
import { Link } from 'react-router-dom';

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
      <ul className="linList">
        {
                    links.map((item) => (
                      <li key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))
                }
      </ul>
    </nav>
  );
};

export default Header;
