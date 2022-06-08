import React from "react";

function Welcome(props) {
  function handleClick(event) {
    event.preventDefault();
    props.setAppState("questions");
  }

  return (
    <div className="container">
      <section className="intro-header">
        <h1><span style={{color: "red"}}>WO</span>LIGRA<span style={{color: "#06c8d9"}}>PH </span></h1>
        <h2>A Work-Life Balance Indicator </h2>
      </section>
      <section className="intro-copy">
        <h3>
         Woligraph is a self coined word, it's a software that assesses the work-life pattern of an individual and determines if the individual is having an healthy, unhealthy or fairly healthy work-life balance as well as suggest possible ways to improve
        </h3><br/>
        <h3>
          This assessment is the first step toward creating that balance you need. Choose the answer that best describe what you are going through. 
        </h3><br/>

        
      </section>
      <section>
      <button class="c-button c-button--gooey" onClick={handleClick} > Goodluck!!!
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>

  <defs>
    <filter id="goo">
      <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
      <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic"></feBlend>
    </filter>
  </defs>
      </section>
    </div>
  );
}

export default Welcome;

