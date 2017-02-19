// Copied from stackoverflow.

var lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};

function deromanize( roman ) {
  var roman = roman.toUpperCase(),
      arabic = 0,
      i = roman.length;
  while (i--) {
    if ( lookup[roman[i]] < lookup[roman[i+1]] )
      arabic -= lookup[roman[i]];
    else
      arabic += lookup[roman[i]];
  }
  return arabic;
}

module.exports = {
  convert: deromanize,
  numerals: lookup
};
