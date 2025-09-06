import React, { useEffect } from "react";

const Helmet = (props) => {
  useEffect(() => {
    document.title = "EduSkill - " + props.title
  },[props.title]);
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
