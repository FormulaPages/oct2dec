var assert = require('assert');

describe('OCT2DEC', function() {

  var OCT2DEC = require('./OCT2DEC');
  var error = require('formula-errors');

  it('should return number error if it is not an octal number.', function() {
    assert(OCT2DEC('8') === error.num);
  });

  it('should return number error if it is an octal number greater than 10 digits.', function() {
    assert(OCT2DEC('60000000001') === error.num);
  });

  it('should convert smallest octal number to decimal.', function() {
    assert(OCT2DEC('0') === 0);
  });

  it('should convert largest octal number to a decimal number represented in two\'s complement range for N=30 where N is the number of bits.', function() {
    assert(OCT2DEC('7777777777') === -1);
  });

  it('should convert octal number 4000000000 to smallest decimal number in two\'s complement negative range.', function() {
    assert(OCT2DEC('4000000000') === -536870912);
  });

  it('should convert octal number 3777777777 to largest decimal number in two\'s complement non-negative range.', function() {
    assert(OCT2DEC('3777777777') === 536870911);
  });

  it('should convert octal number 54 to decimal number 44.', function() {
    assert(OCT2DEC('54') === 44);
  });

  it('should convert octal number 7777777533 to decimal number -165.', function() {
    assert(OCT2DEC('7777777533') === -165);
  });

});
