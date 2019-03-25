
const { expect } = require('chai');
const { findDuplicate } = require('../findDuplicates.js');



describe('findDuplicates()', function () {
  it("return 0 for input of ['5; 0, 1, 2, 3, 0']", function () {
    let input, expected, actual;
    input = ['5; 0, 1, 2, 3, 0'];
    expected = '0';
    actual = findDuplicate(input);
    expect(actual).to.equal(expected)

  });
  it("return  for input of ['20;0,1,2,3,4,5,6,7,8,9,10,11,12,13,4,14,15,16,17,18']", function () {
    let input, expected, actual;
    input = ['20;0,1,2,3,4,5,6,7,8,9,10,11,12,13,4,14,15,16,17,18'];
    expected = '4';
    actual = findDuplicate(input);
    expect(actual).to.equal(expected)
  });
});

