import create from 'zustand'


export const useBearStore = create((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
  removeAllBears: () => set({ count: 0 }),
}))
