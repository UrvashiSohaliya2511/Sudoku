import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { check } from "./Check";

export const InputFill = ({ e, i, j }) => {
  const [bg, setbg] = React.useState("black");
  const { board, setboard, resettheme, level } = useContext(AppContext);

  const [val, setval] = React.useState("");

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
    setval("");
  }, [resettheme, level]);

  const styleFill = {
    backgroundColor: bg,
    color: "white",
  };
  const defaultStyle = {
    backgroundColor: "#a5d6a7",
    color: "black",
  };

  const handleChange = (e, row, col) => {
    let ans = check(board, row, col, +e.target.value);
    // console.log(e.target.value);
    let temp = board;
    // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (ans) {
      setbg("#9bc65d");
    } else {
      setbg("#ed9494");
    }
    setval(e.target.value);
    temp[row][col] = +e.target.value;
    setboard(temp);
  };

  const clear = (e) => {
    let temp = board;
    temp[i][j] = 0;
    setboard(temp);
    e.target.value = "";
  };

  return (
    <input
      onChange={(k) => {
        handleChange(k, i, j);
      }}
      onFocus={clear}
      style={e > 0 ? defaultStyle : styleFill}
      key={[i, j]}
      disabled={e > 0}
      value={board[i][j] === 0 ? val : board[i][j]}
      type="text"
      maxLength="1"
      inputMode="numeric"
    />
  );
};
