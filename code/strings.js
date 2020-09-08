//strings and characters
let string = "this is a string";
let char = "c";

//rendering literal characters
let literal = "This is a \"quote\"";
let singleQuote = 'single quotes can also be used to declare other "quotes" within them';
let backQuote = `back quotes can also declared both 'single' and "double" quotes`;

/*backslash commands
\' = render single quotes
\" = render double quotes
\\ = render backslash
\n = newline
\r = carriage return
\t = tab
\b = backspace
\f = form feed
*/

//concatenating strings
let concat = "string one" + "string two";

//with compound addition
let concatTwo = "string one";
concatTwo += "string two";

//with variables
let concatThree = "string one" + concat + concatTwo + "string two";

//string length
let text = "this is a string";
text.length;

//indexing a string
let index = "this is a string";
let first = index[0];

//index of a character
let findChar = "this is a string"
findChar.indexOf("t")

//changing a character within a string
let change = "change a letter or string"
//incorrect method
change[0] = "C";
//correct method;
change.replace("c", "C");