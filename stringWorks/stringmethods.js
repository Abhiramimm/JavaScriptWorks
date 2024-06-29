var text="javascript works"
 //       0123456789

// string methods

/* 
    charAt(index)
    indexOf(char)
    toUpperCase()
    toLowerCase()
    startsWith("str")
    endsWith("str")
    includes("str")
    slice(start,end)
    split()

*/

// charAt(index) return character at specified index
console.log(text.charAt(2));

// indexOf(char) return -1 if specified character not in string
console.log(text.indexOf("a"));

// toUpperCase()
console.log(text.toUpperCase());

//toLowerCase()
console.log(text.toLowerCase());

// startsWith("str") return boolean value
console.log(text.startsWith("ja"));

//endsWith("str") return  boolean value
console.log(text.endsWith("pt"));

//includes("str") return boolean value
console.log(text.includes("scr"));

// slice(start,end) it doesn't modify the original string
console.log(text.slice(0,4));

// split()
console.log(text.split(" "));

