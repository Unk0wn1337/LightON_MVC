import Model from "../Model/Model.js";
import JatekTer from "../View/JatekTer.js";


export default class JatekContoller {
  #taroloElem;
  #lista;
  constructor() {
    this.#taroloElem = $(".Container");
    this.model = new Model()
    this.#lista = this.model.getLista();
    new JatekTer(this.#lista, this.#taroloElem);
    this.szinvaltas()
}
  szinvaltas() {
    $(window).on("lampa", (event) => {
        console.log(event.detail)
        console.log("eljut a JatekController kezelt eseményéig");
        //meg kell hívni a modellnek a szomszédok kapcsolás metódusát, ami meg fogja változtatni a modellbe a listűt
        
        //be kell kérni az uj listát
        //az új listával példányositani kell a játékteret
        this.#lista = this.model.getLista();
        new JatekTer(this.#lista, this.#taroloElem);
    });
  }
}

// let sor = Math.floor(index / meretSzam);
// let oszlop = index % meretSzam;

// let felsoIndex = (sor - 1) * meretSzam + oszlop;
// let alsoIndex = (sor + 1) * meretSzam + oszlop;
// let balIndex = sor * meretSzam + oszlop - 1;
// let jobbIndex = sor * meretSzam + oszlop + 1;
