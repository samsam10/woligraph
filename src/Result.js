import React from "react";
import "./App.css";
import NotHealthy from "./NotHealthy";
import FairlyHealthy from "./FairlyHealthy";
import Healthy from "./Healthy";


function Result({results, playAgain}) {

      const aCount = results.filter((answer) => answer === "a").length;
      const bCount = results.filter((answer) => answer === "b").length;
      const cCount = results.filter((answer) => answer === "c").length;
      const totals = [
        { label: "a", value: aCount },
        { label: "b", value: bCount },
        { label: "c", value: cCount },
      ];

let workLife;

if (aCount > bCount && aCount > cCount) {
  workLife = <NotHealthy />
} else if (bCount > aCount && bCount > cCount) {
workLife = <FairlyHealthy />}
else if (cCount > aCount && cCount > bCount) {
  workLife = <Healthy />
}
else if (aCount === bCount) {
// workLife = <Vatapitta />
workLife = <NotHealthy />
} else if (bCount === cCount) {
// workLife = <Pittakapha />
workLife = <FairlyHealthy />
}
else if (aCount === cCount) {
// workLife = <Vatakapha />
workLife = <FairlyHealthy />
} 
else {
  workLife = null;
}






 console.log(totals);
  return (
    <div className="Result">
      <h2>Your Work-Life balance is likely to be...</h2>
{workLife}

<div className="playAgain">
<button className="dosha-playAgain" onClick={event => window.location.href = '/'}> Go again!</button>

</div>


 </div>
  );
}

export default Result;
