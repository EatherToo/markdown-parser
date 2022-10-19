import { BasicType } from '../../../types/syntax-types.type';
import { TokenType } from '../../../types/tokenize.type';
import { isWhiteSpace } from '../../utils/utils';

export default function titleTokenize(content: string, start: number): TokenType {
  // traverse forward to make sure this is a Title token start
  let prePosition = start - 1;
  while (prePosition !== -1) {
    const char = content[prePosition];
    if (char === '\n') {  
      break;
    }
    if (!isWhiteSpace(char)) {
      return {
        originText: content[start],
        type: BasicType.None,
        position: start + 1,
      };
    }
    prePosition--;
  }

  let position = start;
  let char = content[position];
  const isContinue = () => {
    return position < content.length;
  };
  let originText = '';
  while (char !== ' ' && isContinue()) {
    if (char !== '#') {
      return {
        originText: originText + char,
        position,
        type: BasicType.None,
      };
    }
    originText += '#';

    position++;
    char = content[position];
  }
  if (char === ' ') {
    return {
      originText,
      position: position + 1,
      type: BasicType.Title,
    };
  }
  return {
    originText,
    position: position - 1,
    type: BasicType.None,
  };
}
