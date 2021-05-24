export const initialState = {
  basket: [],
  productPrim: [],
  numCartItems: 0
};

// Selector
export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket
      };

    case "ADD_TO_PRODUCTPRIM":
      return {
        ...state,
        productPrim: [...state.productPrim, action.item]
      };

    case "EMPTY_PRODUCTPRIM":
      return {
        ...state,
        productPrim: []
      };

    default:
      return state;
  }
};

export default reducer;
