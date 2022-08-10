import { atom } from "recoil";
import { Torikata, Waza } from "../types/type";
import { tachikataList, torikataList, wazaList } from "../consts/index";

export const tachikataAtom = atom<string[]>({
  key: "tachikataAtom",
  default: tachikataList,
});

export const torikataAtom = atom<Torikata[]>({
  key: "torikataAtom",
  default: torikataList,
});

export const wazaAtom = atom<Waza[]>({
  key: "wazaAtom",
  default: wazaList,
});
