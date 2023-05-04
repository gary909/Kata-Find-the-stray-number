function stray(numbers) {
    numbers.sort();
    if( numbers[0] == numbers[1] ){
        return numbers[numbers.length - 1];
    } else {
        return numbers[0];
    }
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([2, 1, 1])); // 2