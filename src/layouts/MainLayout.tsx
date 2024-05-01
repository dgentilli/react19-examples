import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <header>
      <h1>React 19 Practice</h1>
      {<Outlet />}
    </header>
  );
};

export default MainLayout;
