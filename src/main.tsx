import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import MesoneedlingPage from './pages/services/MesoneedlingPage';
import WrinkleRelaxersPage from './pages/services/WrinkleRelaxersPage';
import DermalFillersPage from './pages/services/DermalFillersPage';
import PRPPage from './pages/services/PRPPage';
import DermalFillersCare from './pages/resources/DermalFillersCare';
import MesoneedlingCare from './pages/resources/MesoneedlingCare';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'services/mesoneedling', element: <MesoneedlingPage /> },
      { path: 'services/wrinkle-relaxers', element: <WrinkleRelaxersPage /> },
      { path: 'services/dermal-fillers', element: <DermalFillersPage /> },
      { path: 'services/prp', element: <PRPPage /> },
      { path: 'resources/dermal-fillers-care', element: <DermalFillersCare /> },
      { path: 'resources/mesoneedling-care', element: <MesoneedlingCare /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);