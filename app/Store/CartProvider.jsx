import { createContext, useState, useContext } from "react";

const AppContext = createContext();
export const useCartContext = () => useContext(AppContext);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (newItem, quantity) => {
    !items.find((item) => item.id === newItem.id) &&
      setItems([...items, { ...newItem, quantity }]);
  };
  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));
  const clear = () => setItems([]);
  const isInCart = (id) =>
    items.find((item) => item.id === id) ? true : false;

  return (
    <AppContext.Provider value={[items, setItems]}>
      {children}
    </AppContext.Provider>
  );
};
export default CartProvider;
