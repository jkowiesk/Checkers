import { createContext, useReducer, useState } from "react";

const BOARD_ROW_SIZE = 10;
const BOARD_COL_SIZE = 10;

const initBoard10x10 = () => {
  let board = [];
  for (let i = 0; i < BOARD_COL_SIZE; i++) {
    let row = [];
    for (let j = 0; j < BOARD_ROW_SIZE; j++) {
      if (i % 2 === 0) row.push(j % 2 === 0 ? 0 : 1);
      else row.push(j % 2 === 0 ? 1 : 0);
    }
    board.push(row);
  }
  return board;
};

export const GameContext = createContext({
  pawn: [], // first elem is row, and second is column
  board: [],
});

const INITAL_VALUE = {
  pawn: [9, 5],
  board: initBoard10x10(),
};

const gameReducer = (state, action) => {
  const { type } = action;
  const {
    pawn: [row, col],
  } = state;
  switch (type) {
    case "w":
      return row === 0 ? state : { ...state, pawn: [row - 1, col] };
    case "s":
      return row === 9 ? state : { ...state, pawn: [row + 1, col] };
    case "a":
      return col === 0 ? state : { ...state, pawn: [row, col - 1] };
    case "d":
      return col === 9 ? state : { ...state, pawn: [row, col + 1] };
    default:
      return state;
  }
};

export function GameProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, INITAL_VALUE);

  const value = {
    ...game,
    gameDispatch,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
