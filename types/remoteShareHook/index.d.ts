declare module "remoteShared/Hooks" {
  interface IProps {
    bears: number;
    increasePopulation: (state) => void;
    removeAllBears:()=>void;
  }
  import {StoreApi, UseBoundStore} from "zustand";
  const useCounter: UseBoundStore<StoreApi<IProps>>;
}
