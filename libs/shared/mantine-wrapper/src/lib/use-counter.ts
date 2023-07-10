import create from "zustand";

export const useCounter = create<any>((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({bears: state.bears + 1})),
  reset: () => set((state) => ({bears: 0}))
}))
