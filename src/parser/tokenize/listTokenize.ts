import { BasicType } from '../../../types/syntax-types.type';
import { TokenType } from '../../../types/tokenize.type';
export function orderedListTokenize(content: string, start: number): TokenType {
  const position = start;
  const char = content[position];

  // while(char !== ' ' &&)

  return {
    originText: '',
    position: start,
    type: BasicType.OrderedList,
  };
}

export function unorderedListTokenize(content: string, start: number): TokenType {
  return {
    originText: '',
    position: start,
    type: BasicType.UnorderedList,
  };
}
