import { Token, TokenizeFunc, TokenType } from '../../../types/tokenize.type';
import { TokenBuffer } from './TokenBuffer';
export const orderedListTokenize: TokenizeFunc = (options) => {
  let tokenBuffer = options.tokenBuffer;
  const { position, tokenList, currentChar, nextChar } = options;

  if (!tokenBuffer) {
    if (tokenList.length !== 0) {
      const topToken = tokenList[tokenList.length - 1];
      if (!Token.isWhiteSpaceType(topToken.type)) {
        return new TokenBuffer(currentChar, TokenType.Text, position);
      }
    }
    tokenBuffer = new TokenBuffer(options.currentChar, TokenType.OrderedListPrefix, options.position);
  } else if (tokenBuffer.type === TokenType.OrderedListPrefix) {
    tokenBuffer.position += 1;
    tokenBuffer.sourceText += currentChar;
  } else {
    return new TokenBuffer(currentChar, TokenType.Text, position);
  }
  if (nextChar === '.') {
    tokenBuffer.isClose = true;
    tokenBuffer.sourceText += '.';
    tokenBuffer.position += 1;
  }
  return tokenBuffer;
};
