import React from "react";


const LoadingSpinner = () => {
  return (
    <div>
      <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
        <div class="spinner-border text-primary"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
