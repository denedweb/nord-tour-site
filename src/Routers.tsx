import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { ToursPage } from './pages/ToursPage/ToursPage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { TourPage } from './pages/TourPage/TourPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';

export const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tours/:tourName" element={<TourPage />} />

          <Route path="/about-us" element={<AboutUsPage />} />

          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}