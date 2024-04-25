import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routers } from './Routers';


import './index.scss';

const Root: React.FC = () => {
  return (
    <Routers />
  );
};

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);

