export type KataElementLists = {
  tachikataList: Tachikata[];
  torikataList: Torikata[];
  wazaList: Waza[];
};
export type KataElementListsKeys = keyof KataElementLists;

export type Tachikata = {
  name: string;
};
export type Torikata = {
  name: string;
  TachikataAreNotAbleTo: string[];
};
export type Waza = {
  name: string;
  TachikataAreNotAbleTo: string[];
  TorikataAreNotAbleTo: string[];
};

export type Element = Tachikata | Torikata | Waza;
