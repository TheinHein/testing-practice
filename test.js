import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

it("Capitalize first letter", () => expect(capitalize("hello")).toBe("Hello"));
it("Capitalize first letter of a sentence", () =>
  expect(capitalize("hello there")).toBe("Hello there"));

it("Reverse a string", () => expect(reverse("hello")).toBe("olleh"));
it("Reverse a string with spaces in between", () =>
  expect(reverse("hello there")).toBe("ereht olleh"));

it("1 + 2 = 3", () => expect(calculator.add(1, 2)).toBe(3));
it("10 - 8 = 2", () => expect(calculator.subtract(10, 8)).toBe(2));
it("6 / 2 = 3", () => expect(calculator.divide(6, 2)).toBe(3));
it("8 * 2 = 16", () => expect(calculator.multiply(8, 2)).toBe(16));

it("abc to be bcd", () => expect(caesarCipher("abc")).toBe("bcd"));
it("abc to be def when shifted by 3", () =>
  expect(caesarCipher("abc", 3)).toBe("def"));
it("hello to be ifmmp", () => expect(caesarCipher("hello")).toBe("ifmmp"));
it("zebra to be afcsb", () => expect(caesarCipher("zebra")).toBe("afcsb"));
it("zeBra to be afCsb", () => expect(caesarCipher("zeBra")).toBe("afCsb"));
it("ze!Bra, to be af!Csb,", () =>
  expect(caesarCipher("ze!Bra")).toBe("af!Csb"));

it("Object with average, min, max, and length properties", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
