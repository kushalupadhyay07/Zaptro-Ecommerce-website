import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let Context = createContext(null);
function ContextProvider({ children }) {
  let [fetchdata, setfetchdata] = useState([]);
  let [loader, setloader] = useState(false);
  async function fetchingdata() {
    let res = await axios.get("https://dummyjson.com/products");
    setfetchdata(res.data.products);
    setloader(true);
  }

  return (
    <>
      <Context.Provider
        value={{ fetchdata, fetchingdata, setfetchdata, loader }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export default ContextProvider;
