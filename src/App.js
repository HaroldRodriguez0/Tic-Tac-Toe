
import { useState } from "react";
import { Grid } from "./components/Grid";
import Winner from "./components/Winner";
import { calcWinner } from "./helpers/calcWinner";


function App() {

  const [arr, setArr] = useState(Array(16).fill(""));
  const [turn, setTurn] = useState("X");

  const handleClic = (i) => {
    let copyArr = [...arr];

    if(copyArr[i] === '' && winner === null){
      if(turn === 'X'){
        copyArr[i] = 'X'
        setArr(copyArr);
        setTurn('O');
      }else{
        copyArr[i] = 'O'
        setArr(copyArr);
        setTurn('X');
      }
    }
  };  

  let ox = turn;
  const winner = calcWinner({arr,ox});

  const handleReset = () => {
    setArr(Array(16).fill(""));
    setTurn("X");
  };


  return (
    <div className="root container d-flex flex-column justify-content-center ">
      <div>
        <h1 className="text-center display-1 mb-5 ">
          <b>Tic Tac Toe</b>
        </h1>
      </div>
      <Grid handleClic={handleClic} arr={arr}/>
      {winner !== null 
        ? (<Winner handleReset={handleReset} ganador={winner} />)
        : null }
    </div>
  );
}

export default App;
















