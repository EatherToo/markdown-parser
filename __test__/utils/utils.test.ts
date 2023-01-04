import { isNumber, isWhiteSpace } from '../../src/utils/utils';

describe('utils test', () => {
  describe('isWhiteSpace test', () => {
    it('no char', () => {
      expect(isWhiteSpace('')).toBe(false);
    });
    it('break line', () => {
      expect(isWhiteSpace('\n')).toBe(true);
    });
    it('horizontal tab', () => {
      expect(isWhiteSpace('\t')).toBe(true);
    });
    it('vertical tab', () => {
      expect(isWhiteSpace('\t')).toBe(true);
    });
    it('carriage return', () => {
      expect(isWhiteSpace('\r')).toBe(true);
    });
    it('Backspace', () => {
      expect(isWhiteSpace('\b')).toBe(true);
    });
    it('spacial spaces', () => {
      const spaceArr = Array.from({ length: 0x200a - 0x2000 }).map((_, idx) => idx + 0x2000);
      for (let i = 0; i < spaceArr.length; i++) {
        const num = spaceArr[i];
        const s = String.fromCharCode(num);
        expect(isWhiteSpace(s)).toBe(true);
      }
    });
    it('not space', () => {
      expect(isWhiteSpace('\\')).toBe(false);
      expect(isWhiteSpace('o')).toBe(false);
      expect(isWhiteSpace('i')).toBe(false);
    });
  });
  describe('isNumber test', () => {
    it('all single numbers', () => {
      Array.from({ length: 10 })
        .map((_, i) => `${i}`)
        .forEach((num) => {
          expect(isNumber(num)).toBe(true);
        });
    });
    it('not numbers', () => {
      expect(isNumber('w')).toBe(false);
    });
  });
});
