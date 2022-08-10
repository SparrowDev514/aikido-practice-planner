import { useRecoilState } from "recoil";
import { tachiKataAtom, torikataAtom, wazaAtom } from "../atoms";
import { tachiKataList, torikataList, wazaList } from "../consts/index";
import { Torikata, Waza } from "../types/type";

const Settings = () => {
  const [selectedTachiKataList, setSelectedTachiKataList] =
    useRecoilState(tachiKataAtom);
  const [selectedTorikataList, setSelectedTorikataList] =
    useRecoilState(torikataAtom);
  const [selectedWazaList, setSelectedWazaList] = useRecoilState(wazaAtom);

  const handleTachiKata = (selectedTachiKata: string) => {
    if (selectedTachiKataList.includes(selectedTachiKata)) {
      const newSelectedTachiKataList = selectedTachiKataList.filter(
        (tachiKata) => selectedTachiKata !== tachiKata
      );
      setSelectedTachiKataList([...newSelectedTachiKataList]);
    } else {
      setSelectedTachiKataList([...selectedTachiKataList, selectedTachiKata]);
    }
  };

  const handleTorikataKata = (selectedTorikata: Torikata) => {
    if (selectedTorikataList.includes(selectedTorikata)) {
      const newSelectedToriKataList = selectedTorikataList.filter(
        (toriKata) => selectedTorikata.name !== toriKata.name
      );
      setSelectedTorikataList([...newSelectedToriKataList]);
    } else {
      setSelectedTorikataList([...selectedTorikataList, selectedTorikata]);
    }
  };

  const handleWaza = (selectedWaza: Waza) => {
    if (selectedWazaList.includes(selectedWaza)) {
      const newSelectedWazaList = selectedWazaList.filter(
        (waza) => selectedWaza.name !== waza.name
      );
      setSelectedWazaList([...newSelectedWazaList]);
    } else {
      setSelectedWazaList([...selectedWazaList, selectedWaza]);
    }
  };

  return (
    <>
      <div>設定</div>
      <hr />
      <table style={{ display: "flex" }}>
        <tbody>
          {tachiKataList.map((tachiKata: string) => (
            <tr key={tachiKata} style={{ flex: 1 }}>
              <td>
                <label htmlFor="tachiKata">
                  <input
                    type="checkbox"
                    name="tachiKata"
                    onChange={() => handleTachiKata(tachiKata)}
                  />
                  {tachiKata}
                </label>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {torikataList.map((torikata: Torikata) => (
            <tr key={torikata.name} style={{ flex: 1 }}>
              <td>
                <label htmlFor="torikata">
                  <input
                    type="checkbox"
                    name="torikata"
                    onChange={() => handleTorikataKata(torikata)}
                  />
                  {torikata.name}
                </label>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {wazaList.map((waza: Waza) => (
            <tr key={waza.name} style={{ flex: 1 }}>
              <td>
                <label htmlFor="waza">
                  <input
                    type="checkbox"
                    name="waza"
                    onChange={() => handleWaza(waza)}
                  />
                  {waza.name}
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Settings;
