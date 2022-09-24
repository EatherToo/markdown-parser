export default function parseTitle(content: string, startPosition: number) {
  let position = startPosition;
  let level = 0;
  let char = content[position];
  const isContinue = () => content.length > position;
  while (char !== ' ' && char !== '\n' && isContinue()) {
    if (char !== '#') {
      break;
    }
    level++;
    position++;
    char = content[position];
  }
  if (char === ' ') {
    let text = '';
    position++;
    char = content[position];
    while (char !== '\n' && isContinue()) {
      text = text + char;
      position++;
      char = content[position];
    }
    return {
      level,
      text,
    };
  } else if (char === '\n' && isContinue()) {
    return {
      level,
      text: '',
    };
  } else {
    let text = '';
    while (char !== '\n' && isContinue()) {
      text += char;
      position++;
      char = content[position];
    }
    return {
      level: 0,
      text: new Array(level).fill('#').join('') + text,
    };
  }
}
