declare module "remoteShared/Hooks" {
  import {StoreApi, UseBoundStore} from "zustand";
  import {IUseCounter} from "../../libs/shared/models/src";

  const useCounter: UseBoundStore<StoreApi<IUseCounter>>;
}

declare module "shared-state" {
  import {StoreApi, UseBoundStore} from "zustand";
  import {IBears} from "../../libs/shared/models/src";
  const useBearStore: UseBoundStore<StoreApi<IBears>>;
}
