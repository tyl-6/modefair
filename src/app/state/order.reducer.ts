import { Action, createReducer, on } from "@ngrx/store";
import { processorChange,memoryChange,storageChange,keyboardChange,createOrder, updateOrder} from './order.actions';
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
    total: 0,
    inStock: true,
    color: '',
    keyboard: ''
}

const _reducers = createReducer(
    initialState,
    on(createOrder, (state, { newState }) => {
        const newTtl = newState.price + newState.memoryPrice + newState.storagePrice + newState.processorPrice;
        const repayment = newTtl / newState.instalmentPeriod;
        const hasStock = (newState.memoryPrice===0&&newState.processorPrice===0&&newState.storagePrice===0);
        return {
            ...newState,
            total: newTtl,
            instalmentPerMonth: repayment,
            inStock: hasStock
        }
    }),
    on(updateOrder, (state, { updateState }) => {
        const newTtl = updateState.price + updateState.memoryPrice + updateState.storagePrice + updateState.processorPrice;
        const repayment = newTtl / updateState.instalmentPeriod;
        const hasStock = (updateState.memoryPrice===0&&updateState.processorPrice===0&&updateState.storagePrice===0&&updateState.keyboard==='defaultKeyboard');
        return {
            ...updateState,
            total: newTtl,
            instalmentPerMonth: repayment,
            inStock: hasStock
        }
    }),
)

export function reducers(state: ShoppingCartItem|undefined, action: Action) {
    return _reducers(state,action);
}