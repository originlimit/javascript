//feed this an empty array

function fizzBuzz(ar){
    for(let i = 1; i <= 100; i++){
        i % 5 == 0 && i % 3 == 0 ? ar.push("FIZZBUZZ") : i % 5 == 0 ? ar.push("buzz") : i % 3 == 0 ? ar.push("fizz") : ar.push(i);
    }
    return ar;
}

