import { Component, Input } from "@angular/core";
import { Product } from "../product/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../../service/product.service";
import { Store } from "@ngrx/store";
import { ShoppingCartItem } from "../../../../state/shoppingCartItem.model";
import { Observable } from "rxjs";
import { selectShoppingCartItem, selectShoppingCartState } from "../../../../state/order.selector";
import { createOrder, keyboardChange, updateOrder } from "../../../../state/order.actions";

@Component({
    selector: 'product-order-pad',
    templateUrl : './product-order-pad.component.html'
})

export class ProductOrderPadComponent {
    screensize!: string;
    color!: string;
    processor!: string;
    model!: string;
    imgPath: string = 'assets/images/';
    applePlusLogo: string = this.imgPath+'apple-tv-plus-logo.png';

    product!: Product;

    selectedProcessor: any;
    selectedStorage: any;
    selectedUnifiedMemory: any;
    selectedPowerAdapter: any;

    storageRemark!: string;
    processorRemark!: string;
    unifiedMemoryRemark!: string;
    powerAdapterRemark!: string;

    selectedKeyboard: any;

    storedProduct$: Observable<ShoppingCartItem>;
    
    unifiedMemoryOptions:any = [
        
    ]
    
    storageOptions:any = [

    ]

    processorOptions:any = [

    ]

    powerAdapterOptions:any = [

    ]

    keyboardSelection!: any ;
    keyboardOptions: any = []

    powerAdapterOption = [
        {
            value: '70W',
            label: '70W USB-C Power Adapter',
            active: false
        },
        {
            value: '94W',
            label: '96W USB-C Power Adapter',
            active: false
        }
    ]

    appleTvPromo:boolean = true;
    appleTvBackgroundImg: string ='apple-tv-plus-mac-argylle-202404.jpg';

    constructor(private router: Router, private activedRoute: ActivatedRoute, private productService: ProductService, private store: Store<{state: ShoppingCartItem}>){
        this.storedProduct$ = this.store.select(selectShoppingCartItem);

    }

    ngOnInit(){
        const param = this.activedRoute.snapshot.params;
        if(param['model']){
            this.model = param['model'];
        }
        if(param['screensize']){
            this.screensize = param['screensize'];
        }
        if(param['color']){
            this.color = param['color'];
        }
        if(param['processor']){
            this.processor = param['processor'];
        }

        if(localStorage.length > 0){
            this.product = JSON.parse(localStorage.getItem('selectedProduct')!);
            localStorage.removeItem('selectedProduct');
        }

        this.getProductStorageOption(this.processor);
        this.getKeyboardOption();

        this.setInitialCartItemState(this.product);
    }

    setInitialCartItemState(product: Product){
        let newItem: ShoppingCartItem = {
            model: "Macbook Pro",
            price: product.retailPrice!,
            instalmentPerMonth: 0,
            instalmentPeriod: 24,
            processor: product.processor!,
            processorPrice: 0,
            cpu: "8",
            gpu: "16",
            memory: "32",
            memoryPrice: 1600,
            storage: product.storage!,
            storagePrice: 0,
            total: 0,
            inStock: true,
            color: this.color,
            keyboard: this.keyboardSelection
        };
        this.store.dispatch(createOrder({newState: newItem}));
    }

    getProductStorageOption(processor:string){        
        this.productService.getStorageOption(processor).subscribe((res:any)=>{
            if(res){
                this.storageOptions = res.map((x:any)=>{
                    return {
                        label: x.storage+` storage`,
                        value: x.storage,
                        active : false,
                        priceDifference : x.priceDifference,
                        disabled : false
                    }
                });

                this.selectedStorage = this.storageOptions[0];
                this.storageOptions[0].active = true;
            }
        })
    }

    getKeyboardOption(){
        this.productService.getKeyboardOption().subscribe((res:any)=>{
            if(res){
                this.keyboardOptions = res;
                this.keyboardSelection = this.keyboardOptions[0].value;
            }
        })
    }

    getProductImg(){
        return this.imgPath + this.screensize + '-' + this.color.toLocaleLowerCase() + '.jpg';
    }

    changeProcessor(processor:any){
        this.processorOptions.forEach((x:any) => {
            if(processor.chip == x.chip && processor.cpu == x.cpu && processor.gpu == x.gpu)
                x.active = true;
            else
                x.active = false;

        
        });
    }

    changeMemory(memory:any){
        this.unifiedMemoryOptions.forEach((x:any) => {
            if(memory.value === x.value){
                x.active = true;
            } else {
                x.active = false;
            }
        });
    }

    changeStorage(storage:any){
        console.log(storage);
        console.log(this.storageOptions);
        let priceDiff = 0;
        this.storageOptions.forEach((x:any) => {
            if(storage.value === x.value){
                x.active = true;
                priceDiff = x.priceDifference;
            } else {
                x.active = false;
            }
        });
        let _product:any ;
        this.storedProduct$.subscribe((_res)=>{
            if(_res){
                _product = _res;
            }
            
        })
        _product.storage = storage.value;
        _product.storagePrice = priceDiff;
        this.store.dispatch(updateOrder(_product));
    }

    changeAdapter(adapter:any){
        this.powerAdapterOptions.forEach((x:any) => {
            if(adapter.value === x.value){
                x.active = true;
            } else {
                x.active = false;
            }
        });
    }

    changeKeyboard(val:any){
        const keyboardVal = val;
        let _product:any ;
        this.storedProduct$.subscribe((_res)=>{
            if(_res){
                _product = _res;
            }
            
        })
        _product.keyboard = keyboardVal
        this.store.dispatch(updateOrder(_product));
    }

    changeSelection(type:string,option:any){
        switch(type){
            case 'processor':
                this.changeProcessor(option);
                break;
            case 'memory':
                this.changeMemory(option);
                break;
            case 'storage':
                this.changeStorage(option);
                break;
            case 'adapter':
                this.changeProcessor(option);
                break;
            default:
                break;
        }
    }

    filterProcessorOptions(){
        
    }

    filterStorageOptions(){

    }

    getPriceDifference(optionPrice:number, price:number){
        const differ:number = optionPrice - price;
        if(differ == 0){
            return 0;
        }
        return differ;
    }

    getAppleTvPromoBlock(){
        return `${this.imgPath+this.appleTvBackgroundImg}`;
    }

    

}