import Validator from '../Validator';

test('Checking the correct name format', () => {
  const result = new Validator('VeraGerber').validateUsername();

  expect(result).toBe('VeraGerber');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('21-Ve_07-ger').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('Vera_Gerber-2909').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('Вера-2090-Гербер').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});