import React from 'react';
import { Routes, Route } from 'react-router-dom';
// @ts-ignore - App3 module resolution handled by Vite
import { App3 } from 'app3';

const ContentHubPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Content Hub handles its own nested routing internally */}
      <Routes>
        <Route path="/*" element={<App3 />} />
      </Routes>
    </div>
  );
};

export default ContentHubPage;