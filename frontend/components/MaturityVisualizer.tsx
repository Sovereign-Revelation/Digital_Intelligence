import React from 'react';

const MaturityVisualizer = ({ maturity }) => {
  const getColor = (score) => {
    if (score > 0.8) return 'green';
    if (score > 0.5) return 'orange';
    return 'red';
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>Maturity Score</h3>
      <div style={{ background: getColor(maturity.score), padding: '10px' }}>
        {maturity.level} — {maturity.score}
      </div>
    </div>
  );
};

export default MaturityVisualizer;