import { atom } from "recoil";
import { Torikata, Waza } from "../types/type";

export const tachiKataAtom = atom<string[]>({
  key: "tachiKataAtom",
  default: [],
});

export const torikataAtom = atom<Torikata[]>({
  key: "torikataAtom",
  default: [],
});

export const wazaAtom = atom<Waza[]>({
  key: "wazaAtom",
  default: [],
});
