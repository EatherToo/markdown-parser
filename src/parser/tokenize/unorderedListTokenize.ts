import { Token, TokenizeFunc, TokenType } from '../../../types/tokenize.type';
import { TokenBuffer } from './TokenBuffer';
export const unorderedListTokenize: TokenizeFunc = (options) => {
  let tokenBuffer = options.tokenBuffer;
  const { position, tokenList, currentChar } = options;

  if (!tokenBuffer) {
    if (tokenList.length !== 0) {
      const topToken = tokenList[tokenList.length - 1];
      if (!Token.isWhiteSpaceType(topToken.type)) {
        return new TokenBuffer(currentChar, TokenType.Text, position);
      }
    }
    tokenBuffer = new TokenBuffer(currentChar, TokenType.UnorderedListPrefix, options.position);
    tokenBuffer.isClose = true;
    return tokenBuffer;
  } else {
    return new TokenBuffer(currentChar, TokenType.Text, position);
  }
};
