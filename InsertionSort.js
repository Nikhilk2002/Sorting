function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let j=i-1
        let numberToInsert=array[i]

        while(numberToInsert<array[j] && j>=0){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=numberToInsert
    }
   return array
}

console.log(insertionSort([89,-1,46,-32,67,23,87]))