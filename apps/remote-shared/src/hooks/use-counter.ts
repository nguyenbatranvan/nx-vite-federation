import create from 'zustand'
import {IUseCounter} from "@module-fd/shared/models";


export const useCounter = create<IUseCounter>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}))
