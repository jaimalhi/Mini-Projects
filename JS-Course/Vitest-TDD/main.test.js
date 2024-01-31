// Vitest detects files that end in .test.js and will run them when the code changes
// - run {npm test} in terminal to test

//Basic Example
import { expect, test } from 'vitest';
import { cumulativeSum, search } from './app.js';

test('cumulative sum of an array', () => {
    expect(cumulativeSum([1, 3, 5, 7])).toBe(16);
    expect(cumulativeSum([-2, -4, -8])).toBe(-14);
});

test('binary search on a sorted array', () => {
    expect(search(['a','b','c','x','y','z'],'j')).toBe(-1);
    expect(search(['a','b','c','x','y','z'],'x')).toBe(3);
});