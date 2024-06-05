import { createAction, props } from "@ngrx/store";
import { ShoppingCartItem } from "./shoppingCartItem.model";

export const createOrder = createAction('[Create Order]', props<ShoppingCartItem>());
export const processorChange = createAction('[Processor Change]');
export const memoryChange = createAction('[Memory Change]');
export const storageChange = createAction('[Storage Change]');
export const keyboardChange = createAction('[Keyboard Change]');