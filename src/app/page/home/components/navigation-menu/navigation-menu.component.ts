import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
    selector: 'navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.css']
})

export class NavigationMenuComponent{

    @Output() onShowDropDownMenuChange = new EventEmitter<boolean>();
    
    showDropDown: boolean = false;
    menuChildren: any[] = [];
    menuToggled: boolean = false;
    appleIcon: string = 'src/assets/images';
    
    menus: any[] = [
        {
            
            title: 'Store',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'iPad',
                            url: ''
                        },
                        {
                            title:'iPhone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'Mac',
            url: '',
            children: [
                {
                    subTitle: 'Mac',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'iPad',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'iPhone',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'Watch',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'AirPods',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'TV & Home',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'Entertainment',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'Accessories',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        },
        {
            
            title: 'Support',
            url: '',
            children: [
                {
                    subTitle: 'Shop',
                    subItems: [
                        {
                            title:'Shop The Latest',
                            url: ''
                        },
                        {
                            title:'Mac',
                            url: ''
                        },
                        {
                            title:'Ipad',
                            url: ''
                        },
                        {
                            title:'Iphone',
                            url: ''
                        },
                        {
                            title:'Apple Watch',
                            url: ''
                        },
                        {
                            title:'Accessories',
                            url: ''
                        }
                    ]
                }
            ]
        }

    ];

    dropDownMenu: any[] =[

    ];

    constructor(){}

    ngOnInit(){
        this.showDropDown.valueOf
    }

    showDropDownMenu(children: any, val: any){
        this.menuChildren = children;
        this.showDropDown = true;
        this.onShowDropDownMenuChange.emit(true);
    }

    hideDropDownMenu(val: any){
        this.menuChildren =[]
        this.showDropDown = false;
        this.onShowDropDownMenuChange.emit(false);
    }

    toggleMenu(){
        this.menuToggled = !this.menuToggled;
    }

}