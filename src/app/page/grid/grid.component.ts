import { Component, Input } from "@angular/core";
import { ProductService } from "../../service/product.service";
import { map } from "rxjs/operators";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'grid-component',
    templateUrl: './grid.component.html'
})

export class GridComponent {
    
    constructor(private productService: ProductService,
        private sanitiser: DomSanitizer
    ){}
    gridItem: any;
    expandRow: any ={};

    header: any;

    ngOnInit(){
        this.productService.getGridItem().subscribe((res: any)=>{
            if(res){
                this.gridItem = res;
            }
            this.gridItem.forEach((x: any)=>{
                this.expandRow[x.id] = false;
            })
        })
    }

    

    getTableBody(gridItem: any[]){
        let result = '';
        gridItem.forEach((item,i)=>{
            result += `<tr id="${item.id}" class="text-left m-3 border-2 hover:bg-zinc-200 ${(i%2)==0 ? 'bg-white': 'bg-zinc-200'}">
            <td><i id="toggle-${item.id}" [ngClass]="expandRow[${item.id}] ? 'fa fa-minus': 'fa fa-plus' " class="cursor-pointer"></i></td>
            <td>${item.name}</td>
            <td>${item.id}</td>
            <td>${item.unitPrice}</td>
            <td>${item.qtyPerUnit}</td>
            </tr>`;
        })

        document.getElementById("grid-table-body")!.innerHTML = result;
    }

    attachEvent(gridItem:any){
        gridItem.forEach((item: any)=>{
            let icon = document.getElementById(`toggle-${item.id}`);
            console.log(icon);
            icon?.addEventListener("click",()=>{
                this.toggleRow(item.id);
            })
        })
    }

    toggleRow(index: any){
        console.log('click toggle');
        console.log(this.expandRow[index]);
        this.expandRow[index] = !this.expandRow[index];
        console.log(this.expandRow[index]);
    }

    getHeader(item:any){
        if(Array.isArray(item)){
            if(item.length > 0){
                this.header = Object.keys(item[0]);
            }
        }
    }

}