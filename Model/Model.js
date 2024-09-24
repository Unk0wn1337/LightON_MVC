// let sor = Math.floor(index / meretSzam);
// let oszlop = index % meretSzam;


// let felsoIndex = (sor - 1) * meretSzam + oszlop;
// let alsoIndex = (sor + 1) * meretSzam + oszlop;
// let balIndex = sor * meretSzam + oszlop - 1;
// let jobbIndex = sor * meretSzam + oszlop + 1;

export default class Model{
    #sor
    #oszlop
    #lista = [true,true,true,false,true,true,true,true,true];
    #index = 0;

    constructor(sor,index){
        this.#sor=sor
        this.#index=index
    }
    getLista(){
        return this.#lista
    }
    setIndex(index){
        this.#index = index;                       
      }
    szomszedokSzamolasa(index){
        this.#lista[index]=!this.#lista[index]}
}