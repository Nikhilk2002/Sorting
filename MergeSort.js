function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
   let sortArray=[]
   while(leftArr.length&& rightArr.length){
    if(leftArr[0]<=rightArr[0]){
        sortArray.push(leftArr.shift())
    }
    else{
        sortArray.push(rightArr.shift())
    }
   }
   return[...sortArray,...rightArr,...leftArr]
}


console.log(mergeSort([54,76,13,57,93,24]))