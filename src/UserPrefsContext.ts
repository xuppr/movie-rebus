import { createContext, SetStateAction } from "react";

export interface UserPrefs {
  darkMode: boolean;
}

type UserPrefsContextType = {
  userPrefs: UserPrefs;
  setUserPrefs: (value: SetStateAction<UserPrefs>) => void;
};

export const UserPrefsContext = createContext<UserPrefsContextType | undefined>(
  undefined
);
