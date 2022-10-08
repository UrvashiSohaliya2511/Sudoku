import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./display.css";
import { InputFill } from "./InputFill";
export const SudokuMain = () => {
  const {
    board,
    ans,
    setboard,
    handleReset,
    handleview,
    level,
    handlenext,
    data,
    handleprev,
  } = useContext(AppContext);

  const handleResetButton = () => {
    handleReset();
  };

  return (
    <div>
      <h1>Sudoku</h1>
      <button onClick={handleprev} disabled={level === 0}>
        Prev
      </button>
      <button onClick={handleResetButton}>Reset</button>
      <button onClick={handleview}>View Ans</button>
      <button onClick={handlenext} disabled={level === data.length - 1}>
        next
      </button>

      <form>
        <div className="display">
          {board &&
            board.map((ele, i) => {
              return ele.map((e, j) => (
                <InputFill
                  key={[i, j]}
                  board={board}
                  setboard={setboard}
                  e={e}
                  i={i}
                  j={j}
                />
              ));
            })}
        </div>
      </form>
    </div>
  );
};
