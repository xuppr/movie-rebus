import { createContext } from "react";

export const actionTypes = {
  SET_REBUS_SOLVED: "setRebusSolved",
  NEW_REBUS_ERROR: "newRebusError",
};

export function createSetRebusSolved(
  packName: string,
  level: string,
  index: number
) {
  return {
    type: actionTypes.SET_REBUS_SOLVED,
    payload: {
      packName,
      level,
      index,
    },
  };
}

export function reducer(state: any, action: any) {
  switch (action.type) {
    case actionTypes.SET_REBUS_SOLVED:
      return newRebusSolvedState(state, action);
    default:
      return state;
  }
}

export const RebusContext = createContext<any>(undefined);

// ######## INTERNALS ###########
function newRebusSolvedState(state: any, action: any) {
  const payload = action.payload;
  const newLevelArray = state.packs[payload.packName][payload.level].map(
    (rebusObj: any, index: any) => {
      if (index === payload.index) {
        return { ...rebusObj, solved: true };
      }
      return rebusObj;
    }
  );
  const newLevelsPack = {
    ...state.packs[payload.pack],
    [payload.level]: newLevelArray,
  };

  const newState = {
    ...state,
    packs: { ...state.packs, [payload.packName]: newLevelsPack },
  };

  console.log(newState);

  return newState;
}
