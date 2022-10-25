import titleTokenize from '../../../src/parser/tokenize/titleTokenize';
import { Token, TokenType } from '../../../types/tokenize.type';

describe('title tokenize test', () => {
  describe('test title token start', () => {
    it('spaces before `#`', () => {
      const testStr = `  ### qwew`;
      const testRes = titleTokenize(testStr, 2, []);
      expect(testRes).toEqual(new Token('###', 6, TokenType.TitlePrefix));
    });
    it('break lines before `#`', () => {
      const testStr = `

   ### qwew`;
      const testRes = titleTokenize(testStr, 5, []);
      expect(testRes).toEqual(new Token('###', 9, TokenType.TitlePrefix));

      const testStr2 = `
    

      #### huhuhu`;
      const testRes2 = titleTokenize(testStr2, 13, []);
      // expect(testRes2).toEqual({
      //   originText: '####',
      //   position: 18,
      //   type: BasicType.Title,
      // });
    });
    it('tabs before `#`', () => {
      const testStr = `\t\n   \v \f \t\t \t ### qwew`;
      const testRes = titleTokenize(testStr, 14, []);
      // expect(testRes).toEqual({
      //   originText: '###',
      //   position: 18,
      //   type: BasicType.Title,
      // });
    });
  });

  describe('test title token', () => {
    it('normal case', () => {
      const testStr = '### Title';
      const testRes = titleTokenize(testStr, 0, []);
      // expect(testRes).toEqual({
      //   originText: '###',
      //   position: 4,
      //   type: BasicType.Title,
      // });
    });
    it('not a token start case 1', () => {
      const testStr = '\t \n f \t### Title';
      const testRes = titleTokenize(testStr, 7, []);
      // expect(testRes).toEqual({
      //   originText: '#',
      //   position: 8,
      //   type: BasicType.None,
      // });
    });

    it('not a token start case 2', () => {
      const testStr = '##f# Title';
      const testRes = titleTokenize(testStr, 0, []);
      // expect(testRes).toEqual({
      //   originText: '##f',
      //   position: 2,
      //   type: BasicType.None,
      // });
    });
    it('not a token start case 3', () => {
      const testStr = '####';
      const testRes = titleTokenize(testStr, 0, []);
      // expect(testRes).toEqual({
      //   originText: '####',
      //   position: 3,
      //   type: BasicType.None,
      // });
    });
  });
});
