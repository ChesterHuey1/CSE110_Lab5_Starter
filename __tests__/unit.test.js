// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber should be true for (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber should be true for 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber should be false for 123456789', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('isPhoneNumber should be false for 123-abc-7890', () => {
  expect(isPhoneNumber('123-a45-7890')).toBe(false);
});

test('isEmail should be true for test@hello.com', () => {
  expect(isEmail('test@hello.com')).toBe(true);
});

test('isEmail should be true for testuser@hello.com', () => {
  expect(isEmail('testuser@hello.com')).toBe(true);
});

test('isEmail should be false for test.hello.com', () => {
  expect(isEmail('test.hello.com')).toBe(false);
});

test('isEmail should be false for test@hello', () => {
  expect(isEmail('test@hello')).toBe(false);
});

test('isStrongPassword should be true for a1_b2c3d4', () => {
  expect(isStrongPassword('a1_b2c3d4')).toBe(true);
});

test('isStrongPassword should be true for abcdefghijklmno', () => {
  expect(isStrongPassword('abcdefghijklmno')).toBe(true);
});

test('isStrongPassword should be false for a1_', () => {
  expect(isStrongPassword('234')).toBe(false);
});

test('isStrongPassword should be false for 1abc', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isDate should be true for 12/31/2023', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('isDate should be true for 1/5/2024', () => {
  expect(isDate('1/5/2024')).toBe(true);
});

test('isDate should be false for 2023/12/31', () => {
  expect(isDate('2023/12/31')).toBe(false);
});

test('isDate should be false for 12-31-2023', () => {
  expect(isDate('12-31-2023')).toBe(false);
});

test('isHexColor should be true for #ABC', () => {
  expect(isHexColor('#ABC')).toBe(true);
});

test('isHexColor should be true for #123456', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('isHexColor should be false for #GHI', () => {
  expect(isHexColor('#GHI')).toBe(false);
});

test('isHexColor should be false for #1234', () => {
  expect(isHexColor('#1234')).toBe(false);
});