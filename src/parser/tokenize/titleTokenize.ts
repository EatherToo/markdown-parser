import { Token, TokenType } from '../../../types/tokenize.type';

export default function titleTokenize(content: string, start: number, tokenList: Token[]): Token | number {
  if (tokenList.length !== 0) {
    const topToken = tokenList[tokenList.length - 1];
    if (!Token.isWhiteSpaceType(topToken.type)) {
      return start;
    }
  }

  let position = start;
  let char = content[position];
  if (char !== '#') {
    return start;
  }
  let originText = '';
  while (char !== ' ' && position < content.length) {
    if (char !== '#') {
      return new Token(originText + char, position + 1, TokenType.Text);
    }
    originText += '#';

    position++;
    char = content[position];
  }
  if (char === ' ') {
    return new Token(originText, position + 1, TokenType.TitlePrefix);
  }
  return new Token(originText + char, position - 1, TokenType.Text);
}
