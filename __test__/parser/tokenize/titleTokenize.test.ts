import titleTokenize from '../../../src/parser/tokenize/titleTokenize';
import { TokenBuffer } from '../../../src/parser/tokenize/TokenBuffer';
import { Token, TokenType } from '../../../types/tokenize.type';

describe('title tokenize test', () => {
  describe('test title token start', () => {
    it('md starts with `#`', () => {
      const tokenBuffer = null;
      const testRes = titleTokenize(tokenBuffer, 0, [], '#');
      expect(testRes).toEqual(new TokenBuffer('#', TokenType.TitlePrefix, 0));
    });

    it('token buffer closed', () => {
      const tokenBuffer = null;
      const testRes = titleTokenize(tokenBuffer, 0, [], ' ');
      const expectTokenBuffer = new TokenBuffer('#', TokenType.TitlePrefix, 0);
      expectTokenBuffer.position = 1;
      expectTokenBuffer.isClose = true;
      expectTokenBuffer.sourceText = '# ';
      expect(testRes).toEqual(expectTokenBuffer);

      const testRes2 = titleTokenize(tokenBuffer, 0, [], '\t');
      const expectTokenBuffer2 = new TokenBuffer('#', TokenType.TitlePrefix, 0);
      expectTokenBuffer2.position = 1;
      expectTokenBuffer2.isClose = true;
      expectTokenBuffer2.sourceText = '#\t';
      expect(testRes2).toEqual(expectTokenBuffer2);
    });
  });
});
