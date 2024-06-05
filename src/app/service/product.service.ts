import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ProductService {
    
    constructor(private http: HttpClient){

    }

    BASE_URL:string = '/assets/data';

    getProductList(){
        return this.http.get(this.BASE_URL+"/products.json") ;
    }

    getProcessingUnit(){
        return this.http.get(this.BASE_URL+"/processingUnit.json")
    }

    getGridItem(){
        return this.http.get(this.BASE_URL+"/grid-item.json");
    }

    getStorageOption(processor:string){
        if(processor === "m3"){
            return this.http.get(this.BASE_URL+"/storage-m3.json");
        }
        return this.http.get(this.BASE_URL+"/storage-m3-pro.json");
    }

    getKeyboardOption(){
        return this.http.get(this.BASE_URL+"/keyboard-option.json");
    }
}