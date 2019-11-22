import React from 'react';

const MainCow = ({ cow }) => {
  return (
    <div>
      <h3>{cow.name}</h3>
      <h3>{cow.description}</h3>
    </div>
  );
}

export default MainCow;