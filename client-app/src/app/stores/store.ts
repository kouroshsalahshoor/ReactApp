import { createContext, useContext } from "react";
import AccountStore from "./accountStore";
import CommonStore from "./CommonStore";
import EmployeesStore from "./employeesStore";
import ModalStore from "./modalStore";

interface Store {
  employeesStore: EmployeesStore;
  commonStore: CommonStore;
  accountStore: AccountStore;
  modalStore: ModalStore;
}

export const store: Store = {
  employeesStore: new EmployeesStore(),
  commonStore: new CommonStore(),
  accountStore: new AccountStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
