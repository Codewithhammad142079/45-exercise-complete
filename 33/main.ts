//ORDINARl NUMBER
const numbers: number[] = Array.from({length: 9},(_,i)=>i + 1);
numbers.forEach(number=> {
    if (number === 1){
        console.log(`${number}st`);
    } else if (number === 2){
        console.log(`${number}nd`);   
    } else if (number === 3){
        console.log(`${number}rd`);
    }else{
        console.log(`${number}th`);        
    }
});