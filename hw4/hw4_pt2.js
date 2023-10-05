// You will create a web page to show to interested clients how the compound interest works.

// Below the heading you will code a script to show 3 tables with the calculation of compound interest on a principal of $1000.

// The first table will be for the interest rate of 5%
// The second table will be for the interest rate of 6%
// The third table will be for the interest rate of 7%
// Each of the tables will show the rows from year 1 through 5.

// The formula to calculate the compound interest is: A = P(1 + r)n where:

// P is the principal (the initial amount you borrow or deposit)
// r is the annual rate of interest (percentage)
// n is the number of years the amount is deposited
// A is the amount of money accumulated after n years, including interest
// The table will look like what is shown here below (the table below is showing only the first 4 years and for only the 5% interest rate):

// The first column will have the number for the year
// The second column will have the Amount calculated, based on that formula for that year
// The third column will have the interest rate that is being used
// There is NO INPUT for this problem! The 3 tables (one for 5%, another for 6% and another for 7%) should be shown as soon as the page is opened (loaded in the browser).

// IMPORTANT TIP: The more efficient way to resolve this problem is to make one loop inside the other (nested loop). It is not ok if you set the 3 tables first and then loop to write only the results on the tables! Think about future maintenance - for example, if the company requests to show one more table for another interest rate, or if it is requested to present 10 years, instead of 5 for each interest rate. The less places you have to modify, the better your code is considered. So, use nested loop

// MORE FOR THIS TIP: the outside loop should be for the interest rate that will start a new table tag and the top part of the table (table headings), then the internal loop should be for each year to build the rows of that table!

// You should use jQuery or CSS to alternate the background colors of the rows - whatever colors you want - it does not need to follow the format shown here
// TIP: If using CSS, you can think about nth-of-child pseudo-class for the tr tag!