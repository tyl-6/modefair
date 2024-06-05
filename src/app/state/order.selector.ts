import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingCartItem } from "./shoppingCartItem.model";

export const selectShoppingCartState = createFeatureSelector<ShoppingCartItem>('cart');

export const selectShoppingCartItem = createSelector(
    selectShoppingCartState,
    (state: ShoppingCartItem) => state
)