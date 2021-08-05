import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export const Header = () => {
  return (
    <header className="app-header">
      <Link to="/">Recommended reading list</Link>
    </header>
  );
};
