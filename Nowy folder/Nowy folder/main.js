// for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0) {

//         if (i % 5 == 0) {
//             console.log("FizzBuzz")
//         }
//         else { console.log("Fizz") }
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

//function mleko(x) {
// for(let i = 0; i<x.length; i++){
//     if(x[i] === 0){
//         x[i] = 1
//     }
// }

//for (let i in x){
//  if(x[i] === 0){
//x[i] = 1
//  }
//}
// x.sort((a, b) => { return b - a })
// console.log(x)
//}

/*function cos(przykladowa_tablica) {
    for (let i = 0; i < przykladowa_tablica.length; i++) {
        if (isNaN(przykladowa_tablica[i]) || przykladowa_tablica[i] === 0 || przykladowa_tablica[i] === false || przykladowa_tablica[i] === true || przykladowa_tablica[i] === undefined || przykladowa_tablica[i]===null ) {
            delete przykladowa_tablica[i]
        }
    }
    console.log(przykladowa_tablica)
    
}
 const przykladowa_tablica = [NaN, 0, true, 1, false, -21, '', undefined, 37, null]

 cos(przykladowa_tablica)
*/

function powtorzenia(x){
    const pusta=[]
    let p =0
    console.log(x)
        for(let i=0 ; i<x.length ; i++){
            for(let y=i+1 ; y<x.length ; y++){
                if (x[i] === x[y]) {
                   p++
                   delete x[i]
                }
            }
        }  
         console.log(p)
        console.log(pusta)
        return x
    }
 

