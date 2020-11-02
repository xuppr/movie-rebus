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
  const newSolvedNumber =
    state.packs[payload.packName].solvedMap[payload.level] + 1;

  let newLevelsPack;
  if (newSolvedNumber === newLevelArray.length) {
    newLevelsPack = {
      ...state.packs[payload.packName],
      unlockedLevels: state.packs[payload.packName].unlockedLevels + 1,
      solvedMap: {
        ...state.packs[payload.packName].solvedMap,
        [payload.level]: newSolvedNumber,
      },
      [payload.level]: newLevelArray,
    };
  } else {
    newLevelsPack = {
      ...state.packs[payload.packName],
      solvedMap: {
        ...state.packs[payload.packName].solvedMap,
        [payload.level]: newSolvedNumber,
      },
      [payload.level]: newLevelArray,
    };
  }

  const newState = {
    ...state,
    packs: { ...state.packs, [payload.packName]: newLevelsPack },
  };

  return newState;
}
