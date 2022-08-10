import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tachikataAtom, torikataAtom, wazaAtom } from "../atoms";
import { tachikataList, torikataList, wazaList } from "../consts/index";
import { Torikata, Waza } from "../types/type";

const Settings = () => {
  const [selectedTachikataList, setSelectedTachikataList] =
    useRecoilState(tachikataAtom);
  const [selectedTorikataList, setSelectedTorikataList] =
    useRecoilState(torikataAtom);
  const [selectedWazaList, setSelectedWazaList] = useRecoilState(wazaAtom);

  const handleTachikata = (selectedTachikata: string) => {
    if (selectedTachikataList.includes(selectedTachikata)) {
      const newSelectedTachikataList = selectedTachikataList.filter(
        (tachikata) => selectedTachikata !== tachikata
      );
      setSelectedTachikataList([...newSelectedTachikataList]);
    } else {
      setSelectedTachikataList([...selectedTachikataList, selectedTachikata]);
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
      <Link to="/">戻る</Link>
      <hr />
      <table style={{ display: "flex" }}>
        <tbody>
          {tachikataList.map((tachikata: string) => (
            <tr key={tachikata} style={{ flex: 1 }}>
              <td>
                <label htmlFor="tachikata">
                  <input
                    type="checkbox"
                    name="tachikata"
                    defaultChecked={selectedTachikataList.includes(tachikata)}
                    onChange={() => handleTachikata(tachikata)}
                  />
                  {tachikata}
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
                    defaultChecked={selectedTorikataList.includes(torikata)}
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
                    defaultChecked={selectedWazaList.includes(waza)}
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
