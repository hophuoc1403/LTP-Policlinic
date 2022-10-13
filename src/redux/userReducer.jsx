import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [[], [], [], [], [], []];

const productCart = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    addToCart: (state, actions) => {
      const data = JSON.parse(
        localStorage.getItem(`cart${actions.payload.userId}`) || "[]"
      );
      data.push(actions.payload.product);
      localStorage.setItem(
        `cart${actions.payload.userId}`,
        JSON.stringify(data)
      );
      state[actions.payload.userId] = [...data];
    },
    removeCart: (state, actions) => {
      const userId = actions.payload.userId;
      const productIndex = actions.payload.productIndex;
      let data = JSON.parse(localStorage.getItem(`cart${userId}`) || "[]");
      data.splice(productIndex, 1);
      localStorage.setItem(`cart${userId}`, JSON.stringify(data));
      state[userId] = [...data];
      console.log(data);
    },
  },
});

export const { addToCart, removeCart } = productCart.actions;

export default productCart.reducer;
