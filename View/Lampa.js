import Model from "../Model/Model.js";

export default class Lampa {
    #szuloELEM;
    #id;
    #obj = {};
    #kattintas;

    constructor(obj, szuloELEM, id){
        this.#id = id
        this.#obj = obj;
        this.#szuloELEM = szuloELEM;
      
        this.kiir(); 
         this.#kattintas = $(".lampa:last");
        this.esemenyKezelo();
        
    }

    kiir(){
        this.#szuloELEM.append (`
            <div class="lampa zold">
                
            </div>
            `)
    }

    esemenyKezelo(){
       this.#kattintas.on("click", () => {
        const e = new CustomEvent("lampa", {detail : this.#id});
        console.log(this.#id)
        window.dispatchEvent(e);
       })
    }

}