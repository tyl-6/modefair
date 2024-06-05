// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { ShoppingCartState } from './cart.reducers';

// export const selectShoppingCartState = createFeatureSelector<ShoppingCartState>('shoppingCart');

// export const selectCartItems = createSelector(
//   selectShoppingCartState,
//   state => state.items
// );

// export const selectCartTotal = createSelector(
//   selectCartItems,
//   items => items.reduce((total, item) => total + (item.retailPrice * item.quantity), 0)
// );