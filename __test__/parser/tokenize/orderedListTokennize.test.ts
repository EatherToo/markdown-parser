import { orderedListTokenize } from '../../../src/parser/tokenize/orderedListTokenize';
import { TokenBuffer } from '../../../src/parser/tokenize/TokenBuffer';
import { Token, TokenType } from '../../../types/tokenize.type';

describe('ordered list tokennize', () => {
  describe('md start with a ordered list', () => {
    it('md start with a number', () => {
      const testRes = orderedListTokenize({
        tokenBuffer: null,
        position: 0,
        tokenList: [],
        currentChar: '1',
        nextChar: '2',
      });
      expect(testRes).toEqual(new TokenBuffer('1', TokenType.OrderedListPrefix, 0));
    });
    it('token buffer is not null', () => {
      const testRes = orderedListTokenize({
        tokenBuffer: new TokenBuffer('1', TokenType.OrderedListPrefix, 0),
        position: 1,
        tokenList: [],
        currentChar: '2',
        nextChar: '3',
      });
      expect(testRes).toEqual(new TokenBuffer('12', TokenType.OrderedListPrefix, 1));
    });
    it('ordered list prefix ended', () => {
      const testRes = orderedListTokenize({
        tokenBuffer: new TokenBuffer('99', TokenType.OrderedListPrefix, 8),
        position: 9,
        tokenList: [],
        currentChar: '1',
        nextChar: '.',
      });
      const expectTokenBuffer = new TokenBuffer('991.', TokenType.OrderedListPrefix, 10);
      expectTokenBuffer.isClose = true;
      expect(testRes).toEqual(expectTokenBuffer);
    });
  });
  describe('token list is not empty', () => {
    describe('the top of token list is not white space type', () => {
      const tokenList = [new Token('qaz', 99, TokenType.Text)];
      it('the top of token list is not white space type', () => {
        const testRes = orderedListTokenize({
          tokenBuffer: null,
          position: 100,
          tokenList,
          currentChar: '1',
          nextChar: '2',
        });
        expect(testRes).toEqual(new TokenBuffer('1', TokenType.Text, 100));
      });
    });
    describe('the top of token list is white space type', () => {
      const tokenList = [new Token('\n', 99, TokenType.LineBreak)];

      it('token buffer is null', () => {
        const testRes = orderedListTokenize({
          tokenBuffer: null,
          position: 100,
          tokenList,
          currentChar: '1',
          nextChar: '2',
        });
        expect(testRes).toEqual(new TokenBuffer('1', TokenType.OrderedListPrefix, 100));
      });
      it('token buffer is null and ordered list prefix ended', () => {
        const testRes = orderedListTokenize({
          tokenBuffer: null,
          position: 100,
          tokenList,
          currentChar: '1',
          nextChar: '.',
        });
        const expectTokenBuffer = new TokenBuffer('1.', TokenType.OrderedListPrefix, 101);
        expectTokenBuffer.isClose = true;
        expect(testRes).toEqual(expectTokenBuffer);
      });
      it('token buffer is not null', () => {
        const testRes = orderedListTokenize({
          tokenBuffer: new TokenBuffer('a', TokenType.Text, 100),
          position: 101,
          tokenList,
          currentChar: '1',
          nextChar: '2',
        });
        expect(testRes).toEqual(new TokenBuffer('1', TokenType.Text, 101));
      });
    });
  });
});
