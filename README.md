Algorithms
hw-input

"hw" stands for "Hello world!" :).
Specifications and constraints

Write a program that outputs the sentence Hello World! Your name is concatenated with the single input of the program which is intended to be your name.

Note

Remember that in our context "program's first argument" refers to the third "Node's command-line argument" (we do always ignore the first two), and that we do not manage the case where it is not present (undefined.)
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let output = null;
output = args[0];

// Do not change:
console.log(output);

Examples
Example #0

    Command: node run (no argument)
    Output: undefined

Example #1

    Command: node run Frank
    Output: Hello World! Your name is Frank

Example #2

    Command: node run "Frank MARSHALL"
    Output: Hello World! Your name is Frank MARSHALL

reverse
Specifications and constraints

Write a program that generates the inverse of a string.
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run Hello
    Output: olleH

Example #2

    Command: node run "Hello World!"
    Output: !dlroW olleH

replace
Specifications and constraints

Write a program that replaces each occurrence of a specified character with a given substitute in an input string.
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run Hello o a
    Output: Hella

Example #2

    Command: node run "Hello World!" o a
    Output: Hella Warld!

Example #3

    Command: node run "HellO WorlD!" o a
    Output: HellO WarlD!

Example #4

    Command: node run Hélène e a
    Output: Hélèna

count
Specifications and constraints

Write a program that counts occurrences of a specified character in an input string.
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run "Hello World!" l
    Output: 3

Example #2

    Command: node run "Hello World!" !
    Output: 1

Example #3

    Command: node run "Hello World!" a
    Output: 0

Example #4

    Command: node run "HellO World!" o
    Output: 1

split
Specifications and constraints

Write a program that divides a string using a delimiter, the result is an array of string(s) where each string is one part/division of the original input string.
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run "" ,
    Output: ['']

Example #2

    Command: node run "," ,
    Output: ['', '']

Example #3

    Command: node run "abc" ,
    Output: ['abc']

Example #4

    Command: node run "abc,def" ,
    Output: ['abc', 'def']

Example #5

    Command: node run "abc,,def" ,
    Output: ['abc', '', 'def']

Example #6

    Command: node run "abc;def" ;
    Output: ['abc', 'def']

trim
Specifications and constraints

Write a program that removes all the whitespace characters ( ) from both ends (leading and trailing) of an input string.
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run ""
    Output:  (no whitespace)

Example #2

    Command: node run " "
    Output:  (no whitespace)

Example #3

    Command: node run "abc"
    Output: abc

Example #4

    Command: node run " abc "
    Output: abc

Example #5

    Command:

    node run "   a b     c   "

    Output:

    a b     c

Example #6

    Command: node run " abc def ghi "
    Output: abc def ghi

singles
Specifications and constraints

Write a program that indicates whether or not an input string contains single (unique) characters (no duplicates.)
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run ""
    Output: true

Example #2

    Command: node run " "
    Output: true

Example #3

    Command: node run "abc"
    Output: true

Example #4

    Command: node run "aabcd"
    Output: false

Example #5

    Command: node run "a b c"
    Output: false

wot (waste of time)
Specifications and constraints

Write a program that computes the waste of time given 3 arguments: a delay (in minutes per day, integer), a training duration (in weeks, integer) and a unit for the computation result (one of M, D or H.) The unit is optional, M is the default if not present in the arguments. Do not round.

Tip

You can use the JavaScript built-in parseInt function in order to parse the delay and duration arguments.
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run 15 18 M
    Output: Waste of time: 1350 M

Example #2

    Command: node run 15 18 (computation default unit example)
    Output: Waste of time: 1350 M

Example #3

    Command: node run 15 18 H
    Output: Waste of time: 22.5 H

Example #4

    Command: node run 15 18 D
    Output: Waste of time: 3.2142857142857144 D

shift
Specifications and constraints

Write a program that shifts the characters of an input text by a given number of positions. The expected output is an array where each element is one of the shifted characters. The overflow must be handled (number of positions > input text length.)

Tip

You can use the JavaScript built-in parseInt function in order to parse the number of positions (shift.)
Starter code

// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const output = null;

// Do not change:
console.log(output);

Examples
Example #1

    Command: node run ABCDE 2
    Output: [ 'D', 'E', 'A', 'B', 'C' ]

Example #2

    Command: node run ABCDE 0
    Output: [ 'A', 'B', 'C', 'D', 'E' ]

Example #3

    Command: node run ABCDE 4
    Output: [ 'B', 'C', 'D', 'E', 'A' ]

Example #4

    Command: node run ABCDE 6
    Output: [ 'E', 'A', 'B', 'C', 'D' ]
