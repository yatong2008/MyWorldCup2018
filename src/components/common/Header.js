import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/calendar" activeClassName="active">Match Calendar</Link>
      {" | "}
      <Link to="/table" activeClassName="active">Match Table</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
