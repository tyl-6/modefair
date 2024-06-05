import { Component } from '@angular/core';
import { Product } from './components/product/product.model';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    
    bgImg: string = 'assets/images/bg-img.jpg';
    blur: boolean = false;
    
    displayProduct: Product[] = [

    ]

    availableProduct: Product[] = [

    ]

    processorList: any[] = [];

    processorOption: any[] = [

    ]

    screenSizeOption: any[] = [
        {
            screenSize: '14',
            processorSelection: [
                {
                    key: 'm3',
                    value: 'M3'
                },
                {
                    key: 'm3pro',
                    value: 'M3 Pro'
                },
                {
                    key: 'm3max',
                    value: 'M3 Max'
                }
            ]
        },
        {
            screenSize: '16',
            processorSelection: [        
                {
                    key: 'm3pro',
                    value: 'M3 Pro'
                },
                {
                    key: 'm3max',
                    value: 'M3 Max'
                }
            ]
        },
    ]

    activeScreenSizeSelection: string = '14';
    activeProcessorSelection: string = 'all';
    imgPath: string = 'assets/images/';

    constructor(private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){

    }

    ngOnInit(){
        this.activatedRoute.paramMap.subscribe(params=>{
            console.log(params);
            
        });

        // if(param.has('screensize')){
        //     this.activeScreenSizeSelection = param.get('screensize') || '14';
        // }
        this.getProduct();
        
    }

    getProduct(){
        this.productService.getProductList().subscribe((res: any)=>{
            this.availableProduct = res;
        }).add(()=>{
            this.updateProcessorSelection(this.activeScreenSizeSelection);
        });
    }

    onShowDropDownMenuChange(val: any){
        this.blur = val;
    }

    getProcessingUnit(){
        this.productService.getProcessingUnit().subscribe((res: any)=>{
            this.processorList = res;
        });
    }

    filterProduct(){
        this.displayProduct = this.availableProduct.filter((x: Product)=>{
            return ( (x.processor == this.activeProcessorSelection||'all' == this.activeProcessorSelection ) && x.screenSize==this.activeScreenSizeSelection);
        })
    }

    onChangeScreenSizeSelection(size: string){
        console.log("clicked");
        // this.router.navigate(['/buy-mac/macbook-pro',size]);
        this.activeScreenSizeSelection = size;
        this.updateProcessorSelection(size);
        
    }

    updateProcessorSelection(screenSize: string){
        let _temp = this.screenSizeOption.find(x=>{
            return x.screenSize == screenSize;
        });
        this.processorOption = _temp.processorSelection;
        console.log(this.processorOption);
        this.onChangeProcessorSelection('all');
    }

    onChangeProcessorSelection(processor: string){
        this.activeProcessorSelection = processor;
        this.filterProduct();
    }

    getProductImg(processor: string){
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
            case 'unifiedMemory':
                return 'assets/images/memory-icon-mac-202310.png';
                break;
            default:
                return '';
                break;
        }
    }

    
    
}