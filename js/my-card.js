export class MyCard extends HTMLElement{
    constructor(){
        super();

    }
    connectedCallback(){
        this.innerHTML = 
        '<div class="element">'+
            '<div class="header">Baku <i class="fa-solid fa-plus"></i></div>'+
            '<div class="discription">'+
                '<ul id="data" class="">'+
                    '<li class=""></li>'+
                    '<li class=""></li>'+
                    '<li class=""></li>'+
                '</ul>'+
            '</div>'+
        '</div>'    
    }
}