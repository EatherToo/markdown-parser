import { BasicType } from './syntax-types.type';

export type ParseState = {
  type: BasicType;
  isOpen: boolean;
};

export function createParseState(type: BasicType) {
  return {
    type,
    isOpen: true,
  };
}

export type StackStatus = StackStatus[];
