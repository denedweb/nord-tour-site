import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Outlet />

      <Footer />
    </div>
  );
}
