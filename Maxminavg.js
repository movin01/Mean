function maxMinAvg(arr){
    var newarr = [0];
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] <min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    arr.push([max[i], min[i], avg[i]])
  return console.log([min, max, avg]);
}