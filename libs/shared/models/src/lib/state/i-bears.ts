export interface IBears {
  count: number;
  increasePopulation: (state: IBears) => void;
  removeAllBears: () => void;
}
