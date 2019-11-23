import React from 'react';

const MainCow = ({ cow }) => {
  return (
      <h3> {!!cow._id ? 'Selected Cow: ' : ''} {cow.name} {!!cow._id ? ' - ' : ''} {cow.description}</h3>
  );
}

export default MainCow;