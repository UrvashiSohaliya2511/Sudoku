import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import "./display.css";
import { InputFill } from "./InputFill";
import { check } from "./Check";
import CheckWrong from "./CheckWrong";
import { GiTrophyCup } from "react-icons/gi";
export const SudokuMain = () => {
  const [won, setwon] = useState(false);
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

  const checkres = () => {
    let res = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let x = CheckWrong(board, i, j, board[i][j]);
        if (!x) {
          res++;
        }
      }
    }
    if (res === 0) {
      setwon(true);

      setTimeout(() => {
        setwon(false);
        handlenext();
      }, [2000]);

      // alert("You won this level");
    } else {
      alert(" wrong Answer");
    }
  };

  return (
    <div>
      <h1>Sudoku - {level + 1}</h1>
      {won && <GiTrophyCup className="won" />}

      <button
        onClick={handleprev}
        disabled={level === 0}
        className={level === 0 ? "disabled" : "active"}
      >
        Prev
      </button>
      <button onClick={handleResetButton}>Reset</button>
      <button onClick={handleview}>View Ans</button>

      <button
        onClick={handlenext}
        disabled={level === data.length - 1}
        className={level === data.length - 1 ? "disabled" : "active"}
      >
        next
      </button>
      <button onClick={checkres}>Check</button>

      {!won && (
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
      )}
    </div>
  );
};
