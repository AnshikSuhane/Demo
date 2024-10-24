// function findSubarrayWithSumK(arr, n, k) {
//     let sum = 0;
//     let start = 0;

//     for (let end = 0; end < n; end++) {
//         sum += arr[end];

//         while (sum > k && start <= end) {
//             sum -= arr[start];
//             start++;
//         }

//         if (sum === k) {
//             console.log("Yes");
//             return;
//         }
//     }

//     console.log("No");
// }

// // Example usage
// let arr = [1, 2, 1, 3];
// let n = arr.length;
// let k = 5;
// findSubarrayWithSumK(arr, n, k);
// function comparsion(num1,num2){
//     console.log(num1+num2)
//   }
//   let num1=30
//   let num2=20
//   comparsion(num1,num2)
 
 let array=[2,4,7,1,9,8]
 n=6
 for(let i=0;i<n-1;i++){
    let minindex=i
    for(let j=i+1;j<=n-1;j++){
        if(array[j]>array[minindex]){
            minindex=j
        }
    }
    if(i!=minindex){
        // let temp=array[i]
        // array[i]=array[minindex]
        // array[minindex]=temp
    }
    // console.log(array.join(" "))
}