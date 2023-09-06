import React from "react";

const Card1 = (props) => {
  const classes = "classes" + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card1;
