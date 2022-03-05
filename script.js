/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
'use strict'

class Movie {

constructor(title, director, budget){
    this.title = title;
    this.director = director;
    this.budget = budget;
    
}
//function check if movie budget is larger than 100 mln USD
    wasExpensive(){
        let profit = this.budget;
        if(profit > 100000000){
        console.log(`${this.title} was directed by ${this.director}, movie budged: ${this.budget} USD, \nfilmo biudžetas viršyjo 100 mln. USD`);
        } else {
         console.log(`${this.title} was directed by ${this.director}, movie budged: ${this.budget} USD, \nfilmo biudžetas neviršyjo 100 mln. USD`);
        }
   }

}

//Movie list
const matrix = new Movie ('"Matrix"', 'Kim Harrington', 190000000) ;
const bladeRunnes = new Movie ('"Blade Runner 2049"', 'Denis Villeneuve', 150000000);
const mummy = new Movie ('"The Mummy Returns"', 'Denis Villeneuve', 98000000);

//first movie load
matrix.wasExpensive();
console.log('\n');
//second movie load
mummy.wasExpensive();