import React from "react";

const MainCow = ({ cow }) => {
  let cowInfo = 'No Cow Selected';
  if (!!cow.name && !!cow.description) {
    cowInfo = `${cow.name} - ${cow.description}`;
  }

  return (
    <div className='main-cow'>
      <h1>Selected Cow</h1>
      <div>{cowInfo}</div>
    </div>
  )
}

export default MainCow;