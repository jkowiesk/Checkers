import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import Pawn from "../pawn/pawn.component";

import "./board.styles.scss";

const Field = ({ children, fieldValue }) => {
  return (
    <td className={fieldValue === 0 ? "white-field" : "black-field"}>
      {children}
    </td>
  );
};

function Board() {
  const { board, pawn } = useContext(GameContext);

  return (
    <table>
      <tbody>
        {board.map((row, rowIdx) => (
          <tr>
            {row.map((fieldValue, colIdx) => (
              <Field fieldValue={fieldValue}>
                {pawn[0] === rowIdx && pawn[1] === colIdx ? <Pawn /> : null}
              </Field>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Board;
