function isComposite(number) { 
    var floor = Math.floor( number ); 
    if ( isNaN(floor) || floor == Infinity || floor != number || floor < 4 ){ 
         return false; 
    } 

    var floorSqrt = Math.floor( Math.sqrt( floor ) ); 
    var x = 2; 

    for ( x; x <= floorSqrt; x++ ){  if ( floor % x == 0 ) return true; } 

    return false; 
} 
function isPrime ( number ){ 
    var floor = Math.floor( number ); 
    if ( isNaN(floor) || floor == Infinity || floor != number || floor < 2 ){ 
         return false; 
    } 

    var floorSqrt = Math.floor( Math.sqrt( floor ) ); 
    var x = 2; 

    for ( x; x <= floorSqrt; x++ ){  if ( floor % x == 0 ) return false; } 

    return true; 
} 
function randNum() {
    return parseInt(Math.random() * 99 + 1);
}