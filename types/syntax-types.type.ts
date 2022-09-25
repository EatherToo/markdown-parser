export enum BasicType {
  None /**            */ = 0b00000000,
  Title /**           */ = 0b00000001,
  LineBreak /**       */ = 0b00000010,
  TextBold /**        */ = 0b00000011,
  TextItalic /**      */ = 0b00000100,
  Quote /**           */ = 0b00000101,
  List /**            */ = 0b00000111,
  Code /**            */ = 0b00001000,
  HorizontalRule /**  */ = 0b00001001,
  Link /**            */ = 0b00001010,
  Html /**            */ = 0b00001011,
  Table /**           */ = 0b00001110,
  DeleteText /**      */ = 0b00001111,
  ToDo /**            */ = 0b00010000,
}

export interface IMarkDownElement {
  type: BasicType;
  content: string | IMarkDownElement[];
  No?: number; // list No.
  level?: number; // list or title level
  text?: string; // link or img text
  hoverText?: string; // link or img hover text
}
