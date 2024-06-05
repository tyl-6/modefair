import { Component, Input } from "@angular/core";
import { Product } from "./product.model";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";


@Component({
    selector: 'product-card',
    templateUrl : './product.component.html'
})

export class ProductComponent {
    @Input()
    product!: Product;

    availableColor: any = {
        silver : 'silver.jpg',
        spaceGrey : 'spacegrey.jpg',
        spaceBlack : 'spaceblack.jpg'
    }

    colorName: any = {
        silver : 'Silver',
        spaceGrey: 'Space Grey',
        spaceBlack: 'Space Black'
    }

    selectedInstalmentPeriod: number = 24;
    selectedColor: string = '';
    imgPath: string = 'assets/images/';
    

    constructor(private router: Router, private store: Store){}

    ngOnInit(){
        this.selectedColor = this.product.availableColor?.at(0) || '';
    }

    getProcessorIcon(processor?: string): string{
        if(processor == null){
            return '';
        }
        switch(processor){
            case 'm3':
                return 'assets/images/mbp-m3-icon-202310.png';
                break;
            case 'm3pro':
                return 'assets/images/mbp-m3-pro-icon-202310.png';
                break;
            case 'm3max':
                return 'assets/images/mbp-m3-max-icon-202310.png';
                break;
            default:
                return '';
                break;
        }
    }

    calculateInstalment(price?: number, period?: number){
        if(price == null || period == null){
            return 0;
        }
        return price / period;
    }

    getColor(color: string){
        return this.imgPath + this.availableColor[color];
    }

    changeColor(color: string){
        this.selectedColor = color;
    }

    getProductImg(product: Product){
        return this.imgPath + product.screenSize + '-' + this.selectedColor.toLocaleLowerCase() + '.jpg';
    }

    goToOrder(product:any, color:string){
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        this.router.navigate(['/order',product.screenSize,color,product.processor]);
    }
    
}