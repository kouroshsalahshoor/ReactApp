import { createContext, useContext } from "react";
import EmployeesStore from "./employeesStore";

interface Store {
  employeesStore: EmployeesStore;
}

export const store: Store = {
  employeesStore: new EmployeesStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
