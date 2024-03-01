function arraySearch(arr,target){
    let left =0
    let right=arr.length-1;
    

    while(left<=right){
        let mid=Math.floor(left+right)/2

        if(target===arr[mid]){
            return arr[mid];
        }
        else if(target<arr[mid]){
            right=mid-1
        }
        else if(target>arr[mid]){
            left=mid+1
        }

    }
  return -1;

}

console.log(arraySearch([11,22,33,44,55,66,77],1))

console.log(arraySearch([11,22,33,44,55,66,77],11))

console.log(arraySearch([11,22,33,44,55,66,77],77))
