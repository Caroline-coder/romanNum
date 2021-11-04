const convertRomanNumbers = require("./convertRomanNumbers");

test('convert Roman Number noValue a N', () => {
    expect(convertRomanNumbers()).toBe("N");
});

test('convert Roman Number "string" a cannot be converted', () => {
    expect(convertRomanNumbers("hola")).toBe("cannot be converted");
});

test('convert Roman Number 0 a N', () => {
    expect(convertRomanNumbers(0)).toBe("N");
});

test('convert Roman Number 1 a I', () => {
    expect(convertRomanNumbers(1)).toBe("I");
});

test('convert Roman Number 3 a III', () => {
    expect(convertRomanNumbers(3)).toBe("III");
});

test('convert Roman Number 4 a IV', () => {
    expect(convertRomanNumbers(4)).toBe("IV");
});

test('convert Roman Number 6 a VI', () => {
    expect(convertRomanNumbers(6)).toBe("VI");
});

test('convert Roman Number 9 a IX', () => {
    expect(convertRomanNumbers(9)).toBe("IX");
});

test('convert Roman Number 19 a XIX', () => {
    expect(convertRomanNumbers(19)).toBe("XIX");
});

test('convert Roman Number 29 a XXIX', () => {
    expect(convertRomanNumbers(29)).toBe("XXIX");
});

test('convert Roman Number 49 a XLIX', () => {
    expect(convertRomanNumbers(49)).toBe("XLIX");
});

test('convert Roman Number 50 a L', () => {
    expect(convertRomanNumbers(50)).toBe("L");
});

test('convert Roman Number 60 a LX', () => {
    expect(convertRomanNumbers(60)).toBe("LX");
});

test('convert Roman Number 90 a XC', () => {
    expect(convertRomanNumbers(90)).toBe("XC");
});

test('convert Roman Number 100 a C', () => {
    expect(convertRomanNumbers(100)).toBe("C");
});

test('convert Roman Number 400 a CD', () => {
    expect(convertRomanNumbers(400)).toBe("CD");
});

test('convert Roman Number 500 a D', () => {
    expect(convertRomanNumbers(500)).toBe("D");
});

test('convert Roman Number 900 a CM', () => {
    expect(convertRomanNumbers(900)).toBe("CM");
});

test('convert Roman Number 1000 a M', () => {
    expect(convertRomanNumbers(1000)).toBe("M");
});

test('convert Roman Number 4000 a iv', () => {
    expect(convertRomanNumbers(4000)).toBe("iv");
});

test('convert Roman Number 5000 a v', () => {
    expect(convertRomanNumbers(5000)).toBe("v");
});

test('convert Roman Number 6000 a vi', () => {
    expect(convertRomanNumbers(6000)).toBe("vi");
});

test('convert Roman Number 10000 a x', () => {
    expect(convertRomanNumbers(10000)).toBe("x");
});

test('convert Roman Number 50000 a l', () => {
    expect(convertRomanNumbers(50000)).toBe("l");
});

test('convert Roman Number 500000 a d', () => {
    expect(convertRomanNumbers(500000)).toBe("d");
});

test('convert Roman Number 1000000 a m', () => {
    expect(convertRomanNumbers(1000000)).toBe("m");
});
/*
test('convert Roman Number 4000000 a ¯¯I¯¯V', () => {
    expect(convertRomanNumbers(4000000)).toBe("¯¯I¯¯V");
});

test('convert Roman Number 100000000 a ¯¯C', () => {
    expect(convertRomanNumbers(100000000)).toBe("¯¯C");
});

test('convert Roman Number 500000000 a ¯¯D', () => {
    expect(convertRomanNumbers(500000000)).toBe("¯¯D");
});
 */