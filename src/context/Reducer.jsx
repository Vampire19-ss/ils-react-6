 export function Reducer(store, action) {

    switch (action.type) {

      case "TOGGLE_DARK_MODE":
        return { ...store, darkmode: !store.darkmode };

      case "SET_LOADING":
        return { ...store, loading: action.payload };

      case "SET_PICS":
        return { ...store, pics: action.payload };

      case "SET_USER":
        return { ...store, user: action.payload };

      case "SET_ORDERS":
        return { ...store, orders: action.payload };

      case "SET_PRODUCTS":
        return { ...store, products: action.payload };

      case "SET_ADDRESS":
        return { ...store, address: action.payload };

      default:
        return store;
    }
  }
