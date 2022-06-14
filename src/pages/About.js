import { useState, useEffect } from "react";

const About = (props) => {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only occurs once
  useEffect(() => {
    getAboutData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      <img className="headshot" src={about.headshot} alt={about.name} />
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
