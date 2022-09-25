import { BasicType } from './syntax-types.type';

export type TokenType = {
  originText: string;
  position: number;
  type: BasicType;
};
