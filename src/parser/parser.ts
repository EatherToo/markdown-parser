import { createParseState, ParseState } from '../../types/state-machine.type';
import { BasicType } from '../../types/syntax-types.type';

let currentState: ParseState | null = null;

export default function parse(content: string) {
  let position = 0;
  while (position < content.length) {
    const char = content[position];
    switch (char) {
      case '#':
        if (!currentState) {
          currentState = createParseState(BasicType.Title);
        }
        break;

      default:
        break;
    }

    position++;
  }
  console.log(content);
}
