To run:

1. Install nodejs.
2. Clone this project somewhere.
3. Run this from the project directory:

    node application/entry.js path/to/input-file

Limitations:

The program will handle the implications of the test cases. As such, the limitations are as follows:

* The order of operations is relevant. For example, if an intergalactic symbol assigned to a roman numeral is declared after a conversion, the program will error because it does not recognise that symbol. This may be desirable functionality if the program is to be scaled to include transactions, but not if the program is to handle cases where questions are input first and the declarations or conversions applied later.
* The file type must be utf-8 readable. Each statement/question should be on a separate line.
