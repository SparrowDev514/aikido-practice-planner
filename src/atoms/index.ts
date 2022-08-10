import { atom } from "recoil";
import { KataElementLists, Tachikata, Torikata, Waza } from "../types/type";
import { kataElementLists } from "../consts/index";

export const kataElementAtom = atom<KataElementLists>({
  key: "kataElementAtom",
  default: kataElementLists,
});

export const tachikataAtom = atom<Tachikata[]>({
  key: "tachikataAtom",
  default: kataElementLists["tachikataList"],
});

export const torikataAtom = atom<Torikata[]>({
  key: "torikataAtom",
  default: kataElementLists["torikataList"],
});

export const wazaAtom = atom<Waza[]>({
  key: "wazaAtom",
  default: kataElementLists["wazaList"],
});
