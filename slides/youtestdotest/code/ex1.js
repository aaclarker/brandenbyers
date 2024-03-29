const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

describe("Example One", function() {

 it("should convert single digits", function() {
   expect(numberToRomanNumeral(1)).to.equal("I");
   expect(numberToRomanNumeral(4)).to.equal("IV");
   expect(numberToRomanNumeral(7)).to.equal("VII");
 });

 it("should convert double digits", function() {
   expect(numberToRomanNumeral(10)).to.equal("X");
   expect(numberToRomanNumeral(22)).to.equal("XXII");
   expect(numberToRomanNumeral(35)).to.equal("XXXV");
   expect(numberToRomanNumeral(59)).to.equal("LIX");
   expect(numberToRomanNumeral(99)).to.equal("XCIX");
  })

  it("should convert large numbers up to 3999", function() {
    expect(numberToRomanNumeral(3490)).to.equal("MMMCDXC");
    expect(numberToRomanNumeral(3999)).to.equal("MMMCMXCIX");
  })

});

function numberToRomanNumeral(num) {
  var numeral = "";
  var arr = [
    [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],
    [100,"C"],[90,"XC"],[50,"L"],[40,"XL"],
    [10,"X"],[9,"IX"],[5,"V"],[4,"IV"],
    [1,"I"]
  ];
  arr.map(val => {
    while (num - val[0] >= 0) {
      num -= val[0];
      numeral += val[1];
    }
  })
  return numeral;
}
