import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { kataElementAtom } from "../atoms";
import {
  KataElementLists,
  Tachikata,
  Torikata,
  Waza,
  Element,
} from "../types/type";

const Generater = () => {
  const [kataList, setKataList] = useState<string[]>([]);
  const kataElementLists: KataElementLists =
    useRecoilValue<KataElementLists>(kataElementAtom);

  const getRandomFromList = (listAreAbleToList: Element[]): Element => {
    const randomizedElement: Element =
      listAreAbleToList[Math.floor(Math.random() * listAreAbleToList.length)];
    return randomizedElement;
  };

  const generateKataList = () => {
    if (
      kataElementLists["tachikataList"].length === 0 ||
      kataElementLists["torikataList"].length === 0 ||
      kataElementLists["wazaList"].length === 0
    ) {
      setKataList(["表示できる型がありません"]);
    } else {
      const displayableTachikataList: Tachikata[] = [];
      for (let i = 0; i < 10; i++) {
        displayableTachikataList.push(
          getRandomFromList(kataElementLists["tachikataList"])
        );
      }

      const kataList: string[] = displayableTachikataList.map(
        (displayableTachikata: Tachikata) => {
          const torikataListAreAbleToList: Torikata[] = kataElementLists[
            "torikataList"
          ].filter((torikata: Torikata) => {
            return !torikata["TachikataAreNotAbleTo"].includes(
              displayableTachikata["name"]
            );
          });
          const torikata: Torikata = getRandomFromList(
            torikataListAreAbleToList
          ) as Torikata;

          const wazaListAreAbleToList: Waza[] = kataElementLists[
            "wazaList"
          ].filter((waza: Waza) => {
            return !(
              waza["TachikataAreNotAbleTo"].includes(
                displayableTachikata["name"]
              ) || waza["TorikataAreNotAbleTo"].includes(torikata["name"])
            );
          });
          const waza: Waza = getRandomFromList(wazaListAreAbleToList) as Waza;

          const kata: string =
            displayableTachikata["name"] + torikata["name"] + waza["name"];
          return kata;
        }
      );
      setKataList([...kataList]);
    }
  };

  return (
    <>
      <div>合気道稽古内容ジェネレーター</div>
      <input
        type="button"
        value="生成する"
        onClick={generateKataList}
        style={{ margin: "auto" }}
      />
      <Link to="settings" style={{ float: "right" }}>
        設定
      </Link>
      <hr />
      {kataList.map((kata: string, index: number) => (
        <ul key={index} style={{ textAlign: "center" }}>
          <li style={{ textAlign: "left" }}>{kata}</li>
        </ul>
      ))}
    </>
  );
};

export default Generater;
