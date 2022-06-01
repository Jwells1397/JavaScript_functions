const { TestWatcher } = require("jest");
const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 25;
    actual = sum(10,15);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-6,-4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 3;
    actual = sum(3,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small numbers', () => {
  expected = 2;
  actual = subtract(5,3);
  expect(actual).toBe(expected);
  });

  test('can subtract negative numbers', () => {
  expected = 1;
  actual = subtract (-1,-2);
  expect(actual).toBe(expected);
   });

  });

describe('multiply', () => {

test('can multiply large numbers', () => {
expected = 350;
actual = multiply (50,7);
expect(actual).toBe(expected);
});

test('can multiply negative numbers', () => {
  expected = 350;
  actual = multiply (-50,-7);
  expect(actual).toBe(expected);
});
}); 

describe('divide', () => {
  
  test('can divide large numbers', () => {
  expected = 400;
  actual = divide (1600,4);
  expect(actual).toBe(expected);
  });

  test('can divide negative numbers', () => {
    expected = -3;
    actual = divide (-6, 2)
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can get a positive remainder', () => {
    expected = 1;
    actual = modulus(10, 3);
    expect(actual).toBe(expected);
  })

  test('can get a negative remainer', () => {
    expected = -1;
    actual = modulus (-10,3);
    expect(actual).toBe(expected);
  })
});

describe('even', () => {
  
  test('can find an even number', () => {
    expected = true;
    actual = even (6);
    expect(actual).toBe(expected);
  });

  test('can find an odd number',() => {
    expected = false;
    actual = even (7);
    expect(actual).toBe(expected);
 })
});

describe('odd', () => {
  test('can find an odd number', () => {
    expected = true;
    actual = odd (9);
    expect(actual).toBe(expected);
  })

  test('can find an even number', () => {
    expected = false;
    actual = odd(8);
    expect(actual).toBe(expected);
  })
});
