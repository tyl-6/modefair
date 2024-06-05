import { Component, Input } from "@angular/core";
import { Product } from "../product/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../../service/product.service";

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

    product!: string;

    selectedProcessor: any;
    selectedStorage: any;
    selectedUnifiedMemory: any;
    selectedPowerAdapter: any;

    storageRemark!: string;
    processorRemark!: string;
    unifiedMemoryRemark!: string;
    powerAdapterRemark!: string;

    selectedKeyboard: any;
    
    unifiedMemoryOptions:any = [
        
    ]
    
    storageOptions:any = [

    ]

    processorOptions:any = [

    ]

    powerAdapterOptions:any = [

    ]

    keyboardSelection!: any ;
    keyboardOptions: any = [

    ]

    appleTvPromo:boolean = true;
    appleTvBackgroundImg: string ='apple-tv-plus-mac-argylle-202404.jpg';

    constructor(private router: Router, private activedRoute: ActivatedRoute, private productService: ProductService){

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

        this.getProductStorageOption(this.processor);
        this.getKeyboardOption();
        this.product = `${this.screensize}-inch ${this.model} - ${this.color}`;
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

    filterProcessorOptions(){
        
    }

    filterStorageOptions(){

    }

    getPriceDifference(optionPrice:number, price:number){
        const differ = optionPrice - price;
        if(differ == 0){
            return '';
        }

        return `${differ > 0 ? '+': '-'} RM {{ ${differ} | number: '1.2-2'}}`;
    }

    getAppleTvPromoBlock(){
        return `${this.imgPath+this.appleTvBackgroundImg}`;
    }

}