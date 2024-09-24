import Lampa from "./Lampa.js";

export default class JatekTer {
    #lista = [];
    #taroloElem;
    constructor(lista, taroloElem){
        this.#lista = lista;
        this.#taroloElem = taroloElem;
        this.kiir();
        
        
        
    }

    kiir(){
        this.#lista.forEach((elem,id) => {
            console.log(elem);
            new Lampa(elem, this.#taroloElem, id)
        })
    }
    

}

