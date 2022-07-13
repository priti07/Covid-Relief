import React from "react";
import Person from "./utils/Person";

function AboutUs() {
  return (
    // {/* <h1>About Us</h1> */}
    <div className="about">
      <h1 className="title">Our Team</h1>
      <div className="aboutus">
        {/* <h1>About Us</h1> */}

        <div className="block">
          <Person
            name="Priti Gangwar"
            img="priti.JPG"
            text="Priti Gangwar is a final year undergraduate student of Electronics and Communications Engineering at Delhi Technological 
                University."
          />
        </div>

        <div className="block">
          <Person
            name="Keshav Jindal"
            img="keshav.jpeg"
            text="Keshav Jindal is a final year undergraduate student of Mathematics and Computing at Delhi Technological 
              University."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
