import { useState } from "react";
import { Link } from "react-router-dom";
import { tachikataList, torikataList, wazaList } from "../consts/index";
import { Torikata, Waza } from "../types/type";

const Generater = () => {
  const [kataList, setKataList] = useState<string[]>([]);

  const generateKataList = () => {
    const temporaryLataList: string[] = [];
    for (let i = 0; i < 10; i++) {
      const tachikata: string =
        tachikataList[Math.floor(Math.random() * tachikataList.length)];

      const torikataListAreAbleToList: Torikata[] = torikataList.filter(
        (torikata: Torikata) => {
          return !torikata["TachikataAreNotAbleTo"].includes(tachikata);
        }
      );

      const torikata: Torikata =
        torikataListAreAbleToList[
          Math.floor(Math.random() * torikataListAreAbleToList.length)
        ];

      const wazaListAreAbleToList: Waza[] = wazaList.filter((waza: Waza) => {
        return !(
          waza["TachikataAreNotAbleTo"].includes(tachikata) ||
          waza["TorikataAreNotAbleTo"].includes(torikata["name"])
        );
      });

      const waza: Waza =
        wazaListAreAbleToList[
          Math.floor(Math.random() * wazaListAreAbleToList.length)
        ];

      const kata: string = tachikata + torikata["name"] + waza["name"];
      temporaryLataList.push(kata);
    }
    setKataList([...temporaryLataList]);
  };

  return (
    <>
      <div>合気道稽古内容ジェネレーター</div>
      <input type="button" value="生成する" onClick={generateKataList} />
      <Link to="settings">設定</Link>
      <hr />
      <table>
        <tbody>
          {kataList.map((kata: string) => (
            <tr key={kata}>
              <td>{kata}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Generater;
