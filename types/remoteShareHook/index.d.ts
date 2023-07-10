
declare module "remoteShared/Hooks" {
  import {StoreApi, UseBoundStore} from "zustand";
  import {IUseCounter} from "../../libs/shared/models/src";

  const useCounter: UseBoundStore<StoreApi<IUseCounter>>;
}
