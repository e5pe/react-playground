import React from "react";

const Title = ({ props }) => {
  // console.log({ ...props });
  const { propiedad } = { ...props };
  const { title, subtitle } = propiedad;

  return (
    <>
      <h1>{title}</h1>
      <br />
      <h2>{subtitle}</h2>
    </>
  );
};

export default Title;
