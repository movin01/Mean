function Bubblesort(arr){
 for(let i =0; i <arr.length-1; i++){

    if(arr[i] > arr[i+1]){
        temp=arr[i+1]
        arr[i+1] =arr[i];
        arr[i] = temp;

    }
 }
     
}

 console.log(arr)



