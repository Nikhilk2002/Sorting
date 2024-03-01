function bubleSort(arr){
    let swap
    do{
        swap=false
    for(let i=0;i<arr.length-1;i++){
       
        if(arr[i]>arr[i+1]){
        temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swap=true
        }
        
    }
}
    while(swap){
        
    }
}

let array=[23,54,64,22,11,67,89]
bubleSort(array)
console.log(array)