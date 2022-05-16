import { useCallback, useContext, useEffect } from "react";
import { GameContext } from "../contexts/game.context";

function KeyboardListener() {
  const { gameDispatch } = useContext(GameContext);

  const handler = useCallback(
    ({ key }) => {
      gameDispatch({ type: key, payload: null });
    },
    [gameDispatch]
  );
  useEffect(() => {
    const eventListener = (event) => handler(event);
    window.addEventListener("keypress", eventListener);
    return () => window.removeEventListener("keypress", eventListener);
  }, []);
}

export default KeyboardListener;
