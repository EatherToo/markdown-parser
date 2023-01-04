import lineBreakTokenize from '../../../src/parser/tokenize/lineBreakTokenize';
import { TokenBuffer } from '../../../src/parser/tokenize/TokenBuffer';
import { TokenType } from '../../../types/tokenize.type';

describe('line break tokenize test', () => {
  it('line break tokenize test', () => {
    const testRes = lineBreakTokenize({
      tokenBuffer: null,
      position: 0,
      tokenList: [],
      currentChar: '\n',
    });
    const expectRes = new TokenBuffer('\n', TokenType.LineBreak, 0);
    expectRes.isClose = true;
    expect(testRes).toEqual(expectRes);
  });
});
