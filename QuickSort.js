function quikSort(ar){
    if(ar.length<2){
        return ar
    }
    let leftArray=[]
    let rightArray=[]
    let pivot=ar[ar.length-1]
    for(let i=0;i<ar.length-1;i++){
        if(ar[i]<pivot){
            leftArray.push(ar[i])
        }
        else{
            rightArray.push(ar[i])
        }
    }
    return [...quikSort(leftArray),pivot, ...quikSort(rightArray)]
}

console.log(quikSort([34,54,-45,65,18,92]))