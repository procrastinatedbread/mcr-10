import { createContext, useContext, useReducer } from "react";
import { inventoryData } from "../data";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  data: JSON.parse(localStorage.getItem("products")) || inventoryData,
  filters: JSON.parse(localStorage.getItem("filters")) || {
    department: "all",
    lowStockItems: false,
    sortBy: "name",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_DEPARTMENT": {
      return {
        ...state,
        filters: { ...state.filters, department: action.payload.department },
      };
    }

    case "TOGGLE_LOW_STOCK_ITEMS": {
      return {
        ...state,
        filters: {
          ...state.filters,
          lowStockItems: !state.filters.lowStockItems,
        },
      };
    }

    case "SORT_BY": {
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload.sortBy,
        },
      };
    }

    case "ADD_PRODUCT": {
      return {
        ...state,
        data: [...state.data, action.payload.product],
      };
    }

    default:
      return;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // For data persistence
  localStorage.setItem("products", JSON.stringify(state.data));
  localStorage.setItem("filters", JSON.stringify(state.filters));

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
