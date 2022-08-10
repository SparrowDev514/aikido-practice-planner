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
    const temporaryLataList: string[] = [];
    for (let i = 0; i < 10; i++) {
      const tachikata: Tachikata = getRandomFromList(
        kataElementLists["tachikataList"]
      );

      const torikataListAreAbleToList: Torikata[] = kataElementLists[
        "torikataList"
      ].filter((torikata: Torikata) => {
        return !torikata["TachikataAreNotAbleTo"].includes(tachikata["name"]);
      });

      const torikata: Torikata = getRandomFromList(
        torikataListAreAbleToList
      ) as Torikata;

      const wazaListAreAbleToList: Waza[] = kataElementLists["wazaList"].filter(
        (waza: Waza) => {
          return !(
            waza["TachikataAreNotAbleTo"].includes(tachikata["name"]) ||
            waza["TorikataAreNotAbleTo"].includes(torikata["name"])
          );
        }
      );

      const waza: Waza = getRandomFromList(wazaListAreAbleToList) as Waza;

      const kata: string = tachikata["name"] + torikata["name"] + waza["name"];
      temporaryLataList.push(kata);
    }
    setKataList([...temporaryLataList]);
  };

  return (
    <>
      <div>合気道稽古内容ジェネレーター</div>
      <input type="button" value="生成する" onClick={generateKataList} />
      <br />
      <Link to="settings">設定</Link>
      <hr />
      <table>
        <tbody>
          {kataList.map((kata: string, index: number) => (
            <tr key={index}>
              <td>{kata}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Generater;
