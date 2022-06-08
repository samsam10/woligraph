import "./App.css";
import  { useState } from "react";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Result from "./Result"


function App() {
  let [appState, setAppState] = useState("welcome");
  let [results, setResults] = useState([]);
  let [playAgain, setPlayAgain] = useState("");


  playAgain = () => {
    // this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    })
   
  }
 


  let output;
  if (appState === "welcome") {
    output = <Welcome setAppState = {setAppState}/>;
  } else if (appState === "questions") {
    output = <Questions setAppState={setAppState} setResults={setResults} setPlayAgain={setPlayAgain}/>;
  } else {
    output = <Result results={results} playAgain={playAgain} />
  }




  return (
    <div className="App">
      <header className="App-header"></header>
    {output}
    </div>
  );
}

export default App;
