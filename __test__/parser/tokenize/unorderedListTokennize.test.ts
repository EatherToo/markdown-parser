import { TokenBuffer } from '../../../src/parser/tokenize/TokenBuffer';
import { unorderedListTokenize } from '../../../src/parser/tokenize/unorderedListTokenize';
import { Token, TokenType } from '../../../types/tokenize.type';

describe('unordered list tokennize', () => {
  describe('md start with a unordered list', () => {
    it('md start with a `-`', () => {
      const testRes = unorderedListTokenize({
        tokenBuffer: null,
        position: 0,
        tokenList: [],
        currentChar: '-',
      });
      const expectRes = new TokenBuffer('-', TokenType.UnorderedListPrefix, 0);
      expectRes.isClose = true;
      expect(testRes).toEqual(expectRes);
    });
  });
  describe('token list is not empty', () => {
    describe('the top of token list is not white space type', () => {
      const tokenList = [new Token('qaz', 99, TokenType.Text)];
      it('the top of token list is not white space type', () => {
        const testRes = unorderedListTokenize({
          tokenBuffer: null,
          position: 100,
          tokenList,
          currentChar: '-',
        });
        expect(testRes).toEqual(new TokenBuffer('-', TokenType.Text, 100));
      });
    });
    describe('the top of token list is white space type', () => {
      const tokenList = [new Token('\n', 99, TokenType.LineBreak)];
      const expectRes = new TokenBuffer('-', TokenType.UnorderedListPrefix, 100);
      expectRes.isClose = true;
      it('token buffer is null', () => {
        const testRes = unorderedListTokenize({
          tokenBuffer: null,
          position: 100,
          tokenList,
          currentChar: '-',
        });
        expect(testRes).toEqual(expectRes);
      });
      it('token buffer is not null', () => {
        const testRes = unorderedListTokenize({
          tokenBuffer: new TokenBuffer('a', TokenType.Text, 100),
          position: 101,
          tokenList,
          currentChar: '-',
        });
        expect(testRes).toEqual(new TokenBuffer('-', TokenType.Text, 101));
      });
    });
  });
});
