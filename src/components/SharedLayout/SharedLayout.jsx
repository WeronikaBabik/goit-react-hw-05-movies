import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const isActiveLink = ({ isActive }) =>
    isActive ? css['active'] : css['link'];
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to="movies" className={isActiveLink}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
