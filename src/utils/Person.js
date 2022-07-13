import React from "react";

function Person(props) {
  return (
    <div className="person">
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="body">{props.text}</p>
      </div>
      <div className="image">
        <img className="person-image" alt="person" src={props.img}></img>
      </div>
    </div>
  );
}

export default Person;
