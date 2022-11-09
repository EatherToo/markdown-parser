import { createParseState, ParseState } from '../../types/state-machine.type';
import { BasicType } from '../../types/syntax-types.type';
import { Token, TokenizeFunc } from '../../types/tokenize.type';
import titleTokenize from './tokenize/titleTokenize';
import { TokenBuffer } from './tokenize/TokenBuffer';

const tokenizeFuncs: {
  [p: string]: TokenizeFunc;
} = {
  '#': titleTokenize,
};

export default function parse(content: string) {
  let position = 0;
  const tokenBuffer: null | TokenBuffer = null;
  const TokenList: Token[] = [];
  while (position < content.length) {
    const char = content[position];
    const tokenizeFunc = tokenizeFuncs[char];
    if (tokenizeFunc) {
      const newTokenBuffer = tokenizeFunc(tokenBuffer, position, content[position + 1], TokenList);
    }

    position++;
  }
  console.log(content);
}
