export interface IUseCounter{
  bears: number;
  increasePopulation: (state) => void;
  removeAllBears:()=>void;
}
