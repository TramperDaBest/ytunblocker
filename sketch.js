function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

var videoCode

var isRAW = 0

function go(){
var blockedURL = prompt("Enter the url of the block page")

var isCompatible = blockedURL.indexOf("https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D")

var endOfVideoCode = blockedURL.indexOf("%", isCompatible+49)

if ( isCompatible === -1 ){
alert("That URL is incompatible. Try again with a different URL.")
  END()
}

let text = blockedURL;
let result = text.substring(isCompatible+45, endOfVideoCode-1);

alert("The unblocked URL is https://www.youtube-nocookie.com/embed/"+result)
}
