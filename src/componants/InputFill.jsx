import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { check } from "./Check";

export const InputFill = ({ e, i, j }) => {
  const [bg, setbg] = React.useState("black");
  const { board, ans, setboard, resettheme, setresettheme } =
    useContext(AppContext);
  React.useEffect(() => {
    if (
      (i > 2 && i < 6 && j < 3) ||
      (i > 2 && i < 6 && j > 5) ||
      (j > 2 && j < 6 && i < 3) ||
      (j > 2 && j < 6 && i > 5)
    ) {
      setbg("#223323");
    } else {
      setbg("black");
    }
  }, [resettheme]);

  const styleFill = {
    backgroundColor: bg,
    color: "white",
  };
  const defaultStyle = {
    backgroundColor: "#a5d6a7",
    color: "black",
  };

  const handleChange = (e, row, col) => {
    console.log(e.target.value);
    let ans = check(board, row, col, +e.target.value);
    let temp = board;

    temp[row][col] = +e.target.value;
    setboard(temp);

    if (ans) {
      setbg("#9bc65d");
    } else {
      setbg("#ed9494");
    }
  };

  const clear = (e) => {
    if (!e.target.value == "") {
      e.target.value = "";
    }
  };

  return (
    <input
      onChange={(k) => {
        handleChange(k, i, j);
      }}
      style={e > 0 ? defaultStyle : styleFill}
      key={[i, j]}
      disabled={e > 0}
      onFocus={clear}
      // value={board[i][j]}
      value={board[i][j] === 0 ? "" : board[i][j]}
      // type="number"
      type="text"
      maxLength="1"
      inputMode="numeric"
    />
  );
};
