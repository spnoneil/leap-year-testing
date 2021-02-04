import { TestScheduler } from 'jest';
import Year from "./../src/leapyear";

describe('Leap Year', () => {

    test('should determine whether a value is a year',  () => {
      const newYear = new Year(2);
      expect(newYear.year).toEqual(2)
    });

    test('should determine if year is divisible by 4', () => {
      const isAYear = new Year(2004)
      expect(isAYear.checkYear()).toEqual(true);
    });

    test('should determine if year is NOT divisible by 4', () => {
      const notALeapYear = new Year(2003)
      expect(notALeapYear.checkYear()).toEqual(false);
    });

    test('should determine if year is NOT divisible by 100', () => {
      const notACentury = new Year(2013)
      expect(notACentury.checkYear()).toEqual(false);
    });

    test('Should determine if a year is a leap year if it is divisable by 100 & 400',  ()  =>  {
      const divisableByBoth = new Year(800)
      expect(divisableByBoth.checkYear()).toEqual(true)
    });
});