# Pascal-s-Triangle website

A simple web page where you can:
- Create a Pascal's Triangle to a given row (the max is 100)
- Solve the (n) Power of a Binomial (the max is 100)

All the pages were made by only using HTML, CSS and JavaScript (no additional libraries)

When you press the "Create" or the "Solve" button tha page does a GET request the an API I made. More about that in the next chapter.

# The API

The API where all the requests are sent is https://pascal-s-triangle-api.anvil.app

It is hosted on https://anvil.works/

It responds the the following requests:
- To get the formula to solve the (n) power of a binomial:

&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;/_/api/get_formula_at_exp?n={}&#xa0;&#xa0;&#xa0;Where "n" is the exponent

- To solve the (n) power of a binomial:

&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;/_/api/solve?a={}&b={}&n={}&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Where "a" and "b" are the 2 monoms and "n" is the exponent

- To create the Pascal's triangle to a given row

&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;/_/api/get_triangle_at_exp?n={}&#xa0;&#xa0;&#xa0;&#xa0;Where "n" is the exponent

<b>Note: the {} should be changed to an actual monome</b>

Examples:
- If I want to get the solution of (a^2+1)^3 I will do a GET request to https://pascal-s-triangle-api.anvil.app/_/api/solve?a=a^2&b=1&n=3
- If I want to get formula of the cube of a binomial I will do a GET request to https://pascal-s-triangle-api.anvil.app/_/api/get_formula_at_exp?n=3
- If I want to get the Pascal's triangle all the way to the 5th row I will do a GET request to https://pascal-s-triangle-api.anvil.app/_/api/get_triangle_at_exp?n=5


<b>Note: the API can't solve powers of bionomials with fractions: it will just throw an error or an incorrect result</b>

<b>Note: this is still a BETA version so there might be some bugs. If you find one please report it in the Issues tab. Thanks.</b>
