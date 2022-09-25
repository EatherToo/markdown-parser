export function isWhiteSpace(char: string) {
  if (char.length === 0) {
    return false;
  }
  const code = char.charCodeAt(0);
  if (code >= 0x2000 && code <= 0x200a) {
    return true;
  }
  switch (code) {
    case 0x08: // \b
    case 0x09: // \t
    case 0x0a: // \n
    case 0x0b: // \v
    case 0x0c: // \f
    case 0x0d: // \r
    case 0x20:
    case 0xa0:
    case 0x1680:
    case 0x202f:
    case 0x205f:
    case 0x3000:
      return true;
  }
  return false;
}
