import create from 'zustand'

interface IProps {
  bears: number;
  increasePopulation: (state) => void;
  removeAllBears:()=>void;
}

export const useCounter = create<IProps>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}))
