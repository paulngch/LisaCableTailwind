import React from "react";

const Item = ({ details }) => {
  const { headline, description,imageUrl } = details;
  return (
    <div class=" flex-shrink-0 flex-grow-0 basis-1/3" >
      <div>{headline}</div>
      <img src={imageUrl} />
      <div>{description}</div>
    </div>
  );
};

export default Item;
