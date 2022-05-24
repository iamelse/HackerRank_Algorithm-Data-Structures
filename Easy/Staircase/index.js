/**

    Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

    Write a program that prints a staircase of size .

    Function Description

    Complete the staircase function in the editor below.

    staircase has the following parameter(s):

    int n: an integer
    Print

    Print a staircase as described above.

    Input Format

    A single integer, , denoting the size of the staircase.

    Constraints

    .

    Output Format

    Print a staircase of size  using # symbols and spaces.

    Note: The last line must have  spaces in it.

    Sample Input

    6 
    Sample Output

    #
    ##
    ###
    ####
    #####
    ######

 */


function staircase(n) {

    // want to declare a variable that will hold the final output that we will print 
    let output = ''

    // outer for loop to keep track of the overall number of rows (n)
    for (let i = 1; i <= n; i++) {

        // inner for loop to keep track of the preceding spaces on each line
        // s should start out at n-1 which we can see from the pic I drew
        // s should be greater than or equal to i because the number of spaces decreases as i increases
        // decrease s bc the number of spaces decreases as i increases
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }

        // inner for loop to keep track of the #s on each line
        // h should start at one because the first line will always have one #
        // h should be less than or equal to the row that we are on since h will approach and eventually equal n
        // h increases since we increment h to equal i which will eventually equal n
        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        // new line
        output += "\n"

    }
    // log the final result
    console.log(output);
}

staircase(6);

// https://medium.com/@alireubenstone/two-ways-to-solve-the-hackerrank-staircase-problem-in-javascript-8036d2254567