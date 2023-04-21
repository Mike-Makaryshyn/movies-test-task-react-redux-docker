import React from 'react';

import './Loader.css';

const Loader = () => {
  return (
    <div className="w-full h-1 fixed top-0 left-0">
      <div className="h-full bg-blue-500 animate-loader" />
    </div>
  );
};

export default Loader;
