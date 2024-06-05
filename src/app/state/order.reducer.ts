import { createReducer, on } from "@ngrx/store";
import { processorChange,memoryChange,storageChange,keyboardChange,createOrder} from './order.actions';
import { ShoppingCartItem } from "./shoppingCartItem.model";

export const initialState: ShoppingCartItem = {
    model: '',
    price: 0,
    instalmentPerMonth: 0,
    instalmentPeriod: 24,
    processor: '',
    processorPrice: 0,
    cpu: '',
    gpu: '',
    memory: '',
    memoryPrice: 0,
    storage: '',
    storagePrice: 0,
    total: 0
}

export const reducers = createReducer(
    initialState,
    on(createOrder, (state, ShoppingCartItem)=>({
        ...state,
        ShoppingCartItem
    }) )
)