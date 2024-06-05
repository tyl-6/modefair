// import { createReducer, on } from "@ngrx/store";
// import { Product } from "../app/page/home/components/product/product.model";
// import { addToCart, deleteFromCart, updateCartItem } from "./actions";

// export interface ShoppingCartState {
//   items: Product[];
//   total: number;
    
// }

// export const initialState: ShoppingCartState={
//     items: [],
//     total: 0
// }

// export const shoppingCartReducer = createReducer(
//     initialState,
//     on(addToCart, (state, { product }) => ({
//       ...state,
//       items: [...state.items, product]
//     })),
//     on(deleteFromCart, (state, { id }) => ({
//       ...state,
//       items: state.items.filter(item => item.id !== id)
//     })),
//     on(updateCartItem, (state, { id, quantity }) => ({
//       ...state,
//       items: state.items.map(item => {
//         if (item.id === id) {
//           return { ...item, quantity };
//         }
//         return item;
//       })
//     }))
//   );