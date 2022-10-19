export enum BasicType {
  None /**            */ = 0b00000000,
  Title /**           */ = 0b00000001,
  LineBreak /**       */ = 0b00000010,
  TextBold /**        */ = 0b00000011,
  TextItalic /**      */ = 0b00000100,
  Quote /**           */ = 0b00000101,
  OrderedList /**     */ = 0b00000111,
  UnorderedList /**   */ = 0b00000111,
  Code /**            */ = 0b00001001,
  HorizontalRule /**  */ = 0b00001010,
  Link /**            */ = 0b00001011,
  Html /**            */ = 0b00001110,
  Table /**           */ = 0b00001111,
  DeleteText /**      */ = 0b00010000,
  ToDo /**            */ = 0b00010001,
}

export interface IMarkDownElement {
  type: BasicType;
  content: string | IMarkDownElement[];
  No?: number; // list No.
  level?: number; // list or title level
  text?: string; // link or img text
  hoverText?: string; // link or img hover text
}
