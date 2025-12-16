import { create } from "zustand";

interface Level {
  cellWidth: number;
  bombs: number;
  name: "Facile" | "Medium" | "Difficile";
}

interface State {
  volume: number;
  level: Level;
  vibrateOnLose: boolean;
}

interface Actions {
  setState: (volume: number, level: Level, vibrateOnLose: boolean) => void;
}

const defaultValues: State = {
  level: { name: "Facile", bombs: 20, cellWidth: 10 },
  vibrateOnLose: true,
  volume: 50,
};

export const useOptionsStore = create<State & Actions>((set) => ({
  ...defaultValues,
  setState(volume, level, vibrateOnLose) {
    set({ volume, level, vibrateOnLose });
  },
}));
