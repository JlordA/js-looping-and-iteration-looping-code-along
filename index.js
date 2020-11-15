// Code your solutions in this file
// const namesArray = ["Lisa", "Kaitlin", "Jan"]
// function writeCards(namesArray, event) {
//     let thankYouCards = []
//     for (let i = 0; i < namesArray.length; i++){
//         thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
//     }
//     return thankYouCards;
//     }

// writeCards()

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

// let countDown = 10;
// while (countDown > 0) {
// //     console.log(countDown --);
// }

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber --);
        // startingNumber -= 1;
    }
    console.log( startingNumber );
}