const numbers = [23, 54, 12, 8, 45, 90, 2];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp; 
            }
            
        }
        
    }
    return array;
}

const sorted = bubbleSort(numbers);
console.log(sorted);