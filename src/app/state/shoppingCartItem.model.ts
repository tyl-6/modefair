export interface ShoppingCartItem {
    model: string,
    price: number,
    instalmentPerMonth: number,
    instalmentPeriod: number,
    processor: string,
    processorPrice: number,
    cpu: string,
    gpu: string,
    memory: string,
    memoryPrice: number,
    storage: string,
    storagePrice: number,
    total: number,
    inStock: boolean,
    color:string,
    keyboard: string
}