import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export let Context = createContext(null);
function ContextProvider({ children }) {
  let [fetchdata, setfetchdata] = useState([]);
  let [loader, setloader] = useState(false);
  async function fetchingdata() {
    let res = await axios.get("https://dummyjson.com/products");
    setfetchdata(res.data.products);
    setloader(true);
  }

  function reducer(cartitem, action) {
    let newcartitem = cartitem;
    if (action.type === "Add") {
      newcartitem = [...newcartitem, action.payload];
    } else if (action.type === "delete") {
      newcartitem = newcartitem.filter((item) => item.id != action.payload.id);
    }

    return newcartitem;
  }
  let [cartitem, dispatch] = useReducer(reducer, []);
  let [cartno, setcartno] = useState(0);
  console.log(cartno);
  useEffect(() => {
    setcartno(cartitem.length);
  }, [cartitem]);

  return (
    <>
      <Context.Provider
        value={{
          fetchdata,
          fetchingdata,
          setfetchdata,
          loader,
          cartitem,
          dispatch,
          cartno,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export default ContextProvider;
