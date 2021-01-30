var word = "bottles";
var count = 99;

while (count > 0) {   // enquanto for maior que zero...
    console.log (count + " " + word + " of beer on the wall");
    console.log (count + " " + word + " of beer");
    console.log ("Take one down, pass it around,");
    count = count -1; // tira um
    if (count > 0){  // se for maior que zero
        (count + " " + word + " of beer on the wall");
    } else {
        console.log("No more " + word + " of beer on the wall"); // quando for igual a zero
    }
}