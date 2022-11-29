import titleTokenize from '../../../src/parser/tokenize/titleTokenize';
import { TokenBuffer } from '../../../src/parser/tokenize/TokenBuffer';
import { Token, TokenType } from '../../../types/tokenize.type';

describe('title tokenize test', () => {
  describe('test title token start', () => {
    it('md starts with `#`', () => {
      const testRes = titleTokenize({ tokenBuffer: null, position: 0, tokenList: [], currentChar: '#', nextChar: '#' });
      expect(testRes).toEqual(new TokenBuffer('#', TokenType.TitlePrefix, 0));
    });

    it('token buffer is TitlePrefix', () => {
      const tokenBuffer = new TokenBuffer('#', TokenType.TitlePrefix, 50);
      const tokenRes = titleTokenize({ tokenBuffer, position: 51, tokenList: [], currentChar: '#', nextChar: '#' });
      expect(tokenRes).toEqual(new TokenBuffer('##', TokenType.TitlePrefix, 51));
    });

    it('token buffer is not TitlePrefix', () => {
      const tokenBuffer = new TokenBuffer('#', TokenType.Text, 50);

      const tokenRes = titleTokenize({ tokenBuffer, position: 51, tokenList: [], currentChar: '#', nextChar: '#' });
      expect(tokenRes).toEqual(new TokenBuffer('#', TokenType.Text, 51));
    });

    it('token buffer closed', () => {
      const testRes = titleTokenize({ tokenBuffer: null, position: 0, tokenList: [], currentChar: '#', nextChar: ' ' });
      const expectTokenBuffer = new TokenBuffer('#', TokenType.TitlePrefix, 0);
      expectTokenBuffer.position = 1;
      expectTokenBuffer.isClose = true;
      expectTokenBuffer.sourceText = '# ';
      expect(testRes).toEqual(expectTokenBuffer);

      const testRes2 = titleTokenize({
        tokenBuffer: null,
        position: 0,
        tokenList: [],
        currentChar: '#',
        nextChar: '\t',
      });
      const expectTokenBuffer2 = new TokenBuffer('#', TokenType.TitlePrefix, 0);
      expectTokenBuffer2.position = 1;
      expectTokenBuffer2.isClose = true;
      expectTokenBuffer2.sourceText = '#\t';
      expect(testRes2).toEqual(expectTokenBuffer2);
    });
  });

  describe('token list is not empty', () => {
    it('last token is white space type', () => {
      const tokenList = [new Token(' ', 10, TokenType.Space)];

      const tokenRes = titleTokenize({ tokenBuffer: null, position: 11, tokenList, currentChar: '#', nextChar: '#' });
      expect(tokenRes).toEqual(new TokenBuffer('#', TokenType.TitlePrefix, 11));
    });

    it('last token is not white space type', () => {
      const tokenList = [new Token('#', 10, TokenType.Text)];

      const tokenRes = titleTokenize({ tokenBuffer: null, position: 11, tokenList, currentChar: '#', nextChar: '#' });
      expect(tokenRes).toEqual(new TokenBuffer('#', TokenType.Text, 11));
    });
  });
});
