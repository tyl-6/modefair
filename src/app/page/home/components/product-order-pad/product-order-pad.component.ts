import { Component, Input } from "@angular/core";
import { Product } from "../product/product.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'product-order-pad',
    templateUrl : './product-order-pad.component.html'
})

export class ProductOrderPadComponent {
    screensize!: string;
    color!: string;
    processor!: string;
    imgPath: string = 'assets/images/';
    
    m3UnifiedMemoryOptions = [
        
    ]

    unifiedMemoryOptions = [
        
    ]
    
    storageOptions = [

    ]

    constructor(private router: Router, private activedRoute: ActivatedRoute){

    }

    ngOnInit(){
        const param = this.activedRoute.snapshot.params;
        if(param['screensize']){
            this.screensize = param['screensize'];
        }
        if(param['color']){
            this.color = param['color'];
        }
        if(param['processor']){
            this.processor = param['processor'];
        }
        console.log(param);
    }

    getProductImg(){
        return this.imgPath + this.screensize + '-' + this.color.toLocaleLowerCase() + '.jpg';
    }
}