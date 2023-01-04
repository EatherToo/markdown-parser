import { TokenizeFunc, TokenType } from '../../../types/tokenize.type';
import { TokenBuffer } from './TokenBuffer';

const lineBreakTokenize: TokenizeFunc = (options) => {
  const tokenBuffer = new TokenBuffer('\n', TokenType.LineBreak, options.position);
  tokenBuffer.isClose = true;
  return tokenBuffer;
};

export default lineBreakTokenize;
