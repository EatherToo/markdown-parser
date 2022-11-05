import { TokenType } from '../../../types/tokenize.type';

export class TokenBuffer {
  sourceText: string;
  type: TokenType;
  isClose = false;
  position: number;

  constructor(sourceText: string, type: TokenType, position: number) {
    this.sourceText = sourceText;
    this.type = type;
    this.position = position;
  }
}
