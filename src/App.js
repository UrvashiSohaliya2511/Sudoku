import './App.css';
import { SudokuMain } from './componants/SudokuMain';
import React from "react";
function App() {

  React.useEffect( () => {
    document.title = 'Sudoku';
  } )
  return (
    <div className="App">
      <SudokuMain />
    </div>
  );
}

export default App;
