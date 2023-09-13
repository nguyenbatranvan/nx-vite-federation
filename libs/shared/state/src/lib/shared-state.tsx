import create from 'zustand'
import {IBears} from "@module-fd/shared/models";


export const useBearStore = create<IBears>((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({count: state.count + 1})),
  removeAllBears: () => set({count: 0}),
  reset: () => set({
    count: 0
  })
}))
