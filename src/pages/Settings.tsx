import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { kataElementAtom } from "../atoms";
import { kataElementLists } from "../consts/index";
import {
  KataElementLists,
  KataElementListsKeys,
  Tachikata,
  Torikata,
  Waza,
  Element,
} from "../types/type";

const Settings = () => {
  const [selectedKataElementLists, setSelectedKataElementLists] =
    useRecoilState<KataElementLists>(kataElementAtom);

  const handleElement = (
    selectedElement: Element,
    ElementKinds: KataElementListsKeys
  ) => {
    const selectedElementList: Element[] =
      selectedKataElementLists[ElementKinds];

    if (
      selectedElementList.find(
        (element) => element.name === selectedElement.name
      )
    ) {
      const newSelectedElementList: Element[] = selectedElementList.filter(
        (element: Element) => selectedElement.name !== element.name
      );
      setSelectedKataElementLists({
        ...selectedKataElementLists,
        [ElementKinds]: newSelectedElementList,
      });
    } else {
      setSelectedKataElementLists({
        ...selectedKataElementLists,
        [ElementKinds]: selectedElementList,
      });
    }
  };

  return (
    <>
      <div>設定</div>
      <Link to="/">戻る</Link>
      <hr />
      <table style={{ display: "flex" }}>
        <tbody>
          {kataElementLists["tachikataList"].map(
            (tachikata: Tachikata, index: number) => (
              <tr key={index} style={{ flex: 1 }}>
                <td>
                  <label htmlFor="tachikata">
                    <input
                      type="checkbox"
                      name="tachikata"
                      defaultChecked={selectedKataElementLists[
                        "tachikataList"
                      ].includes(tachikata)}
                      onChange={() => handleElement(tachikata, "tachikataList")}
                    />
                    {tachikata["name"]}
                  </label>
                </td>
              </tr>
            )
          )}
        </tbody>
        <tbody>
          {kataElementLists["torikataList"].map(
            (torikata: Torikata, index: number) => (
              <tr key={index} style={{ flex: 1 }}>
                <td>
                  <label htmlFor="torikata">
                    <input
                      type="checkbox"
                      name="torikata"
                      defaultChecked={selectedKataElementLists[
                        "torikataList"
                      ].includes(torikata)}
                      onChange={() => handleElement(torikata, "torikataList")}
                    />
                    {torikata["name"]}
                  </label>
                </td>
              </tr>
            )
          )}
        </tbody>
        <tbody>
          {kataElementLists["wazaList"].map((waza: Waza, index: number) => (
            <tr key={index} style={{ flex: 1 }}>
              <td>
                <label htmlFor="waza">
                  <input
                    type="checkbox"
                    name="waza"
                    defaultChecked={selectedKataElementLists[
                      "wazaList"
                    ].includes(waza)}
                    onChange={() => handleElement(waza, "wazaList")}
                  />
                  {waza["name"]}
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
