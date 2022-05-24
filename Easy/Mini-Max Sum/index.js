/**

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [ 1, 3, 5, 7, 9];

The minimum sum is 1 + 3 + 5 + 7 + 9  and the maximum sum is 3 + 5 + 7 + 9. The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14

 */


function miniMaxSum(arr) {

    let minValue = 0,
        maxValue = 0,
        minIndex = 0,
        maxIndex = 0,
        minSum = 0,
        maxSum = 0;

    minValue = Math.min(...arr);
    maxValue = Math.max(...arr);
    minIndex = arr.indexOf(minValue);
    maxIndex = arr.indexOf(maxValue);

    for (let i = 0; i < arr.length; i++) {
        if (minIndex != i) {
            maxSum += arr[i];
        }
        if (maxIndex != i) {
            minSum += arr[i];
        }
    }

    console.log(minSum, maxSum);
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));