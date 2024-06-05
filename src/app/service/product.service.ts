import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ProductService {
    
    constructor(private http: HttpClient){

    }

    getProductList(){
        return this.http.get("/assets/data/products.json") ;
    }

    getProcessingUnit(){
        return this.http.get("/assets/data/processingUnit.json")
    }

    getGridItem(){
        return this.http.get("/assets/data/grid-item.json");
    }
}