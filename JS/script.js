 'use strict';
  let numberOfFilms;

function start() {
    numberOfFilms = +prompt( 'how many films have you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

    numberOfFilms = +prompt( 'how many films have you watched?', '');  
   } 
}
start();

      let personalMovieDB={ 

          count: numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          privat: false
      }; 
 
       
            
                         
     function rememberMyFilms(){
        for (let i=0; i<2; i++) {
             let a=prompt('any film?', ''),
                 b=prompt('value of film?', '');
             if (a != null && b != null && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }
        }
     }
     rememberMyFilms();


     

     function detectPersonalLevel(){
        if (personalMovieDB.count <= 10){
            console.log('not enought films');
        }else if (personalMovieDB.count >10 && personalMovieDB.count <= 30){
            console.log('middle watcher');
        }else if (personalMovieDB > 30){
            console.log('you watch a lot');
        }else {
            console.log('error');
        }
           
 
     }

     detectPersonalLevel();


      console.log(personalMovieDB);
      function showMyDB(hidden) {
        if (!hidden){
                console.log(personalMovieDB);
            }
    }
    showMyDB(personalMovieDB.privat);


    function writeYourGenres() {
         for(let i = 1; i<=3; i++){
             
             personalMovieDB.genres[i-1] = prompt('Ваш любимый жанр под номером ${i}');
         }
    }

    writeYourGenres();  
 



         