export interface GridModel {
    
        "id" : number,
        "name" : string,
        "supplierID" : number,
        "catId" : number,
        "qtyPerUnit" : string,
        "unitPrice" : number,
        "inStock" : number,
        "onOrder" : number,
        "reorderLvl" : number,
        "discontinued" : boolean,
        "cat" : {
            "catId" : number,
            "catName" : string,
            "catDesc" : string
        }
}