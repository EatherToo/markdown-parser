import { Token, TokenType } from '../../../types/tokenize.type';
import { isWhiteSpace } from '../../utils/utils';
import { TokenBuffer } from './TokenBuffer';

/**
 *
 * @param tokenBuffer current possible token info
 * @param position current char's position at document
 * @param nextChar
 * @param tokenList
 * @returns {TokenBuffer}
 */
export default function titleTokenize(
  tokenBuffer: TokenBuffer | null,
  position: number,
  tokenList: Token[],
  nextChar?: string,
): TokenBuffer {
  if (tokenList.length !== 0) {
    // previous token must be a white space type,
    // otherwise this char belong to text token type
    const topToken = tokenList[tokenList.length - 1];
    if (!Token.isWhiteSpaceType(topToken.type)) {
      return new TokenBuffer('#', TokenType.Text, position);
    }
  }
  if (!tokenBuffer) {
    tokenBuffer = new TokenBuffer('', TokenType.TitlePrefix, position - 1);
  }

  if (tokenBuffer.type !== TokenType.TitlePrefix) {
    return new TokenBuffer('#', TokenType.Text, position);
  }

  tokenBuffer.sourceText += '#';
  tokenBuffer.position += 1;
  // compare any space char, except a line break
  if (nextChar && isWhiteSpace(nextChar) && nextChar !== '\n') {
    tokenBuffer.isClose = true;
    tokenBuffer.position += 1;
  }
  return tokenBuffer;
}
