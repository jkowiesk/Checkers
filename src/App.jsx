import { useContext } from "react";
import Board from "./components/board/board.component";
import { GameContext } from "./contexts/game.context";

import "./App.scss";
import KeyboardListener from "./utils/keyboard-listener.util";

function App() {
  KeyboardListener();

  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
