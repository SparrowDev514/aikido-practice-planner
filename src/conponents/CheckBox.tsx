import { useRecoilState } from "recoil";
import { kataElementAtom } from "../atoms";
import { kataElementLists } from "../consts/index";
import { KataElementLists, KataElementListsKeys, Element } from "../types/type";

type PropsType = {
  elementKinds: "tachikata" | "torikata" | "waza";
  kataElementListsKey: KataElementListsKeys;
};

const CheckBox = (props: PropsType): JSX.Element => {
  const kataElementListsKey = props.kataElementListsKey;
  const elementKinds = props.elementKinds;

  const [selectedKataElementLists, setSelectedKataElementLists] =
    useRecoilState<KataElementLists>(kataElementAtom);

  const handleElement = (selectedElement: Element) => {
    const selectedElementList: Element[] =
      selectedKataElementLists[kataElementListsKey];
    let newSelectedElementList: Element[] = [];
    const hasSelectedElementInList: boolean = !!selectedElementList.find(
      (element) => element.name === selectedElement.name
    );

    if (hasSelectedElementInList) {
      newSelectedElementList = selectedElementList.filter(
        (element: Element) => selectedElement.name !== element.name
      );
    } else {
      newSelectedElementList = [...selectedElementList, selectedElement];
    }

    setSelectedKataElementLists({
      ...selectedKataElementLists,
      [kataElementListsKey]: newSelectedElementList,
    });
  };

  return (
    <div>
      {kataElementLists[kataElementListsKey].map(
        (element: Element, index: number) => (
          <ul key={index} style={{ textAlign: "center" }}>
            <li style={{ textAlign: "left" }}>
              <label htmlFor="tachikata">
                <input
                  type="checkbox"
                  name={elementKinds}
                  defaultChecked={
                    !!selectedKataElementLists[kataElementListsKey].find(
                      (selectedKataElement) =>
                        selectedKataElement["name"] === element["name"]
                    )
                  }
                  onChange={() => handleElement(element)}
                />
                {element["name"]}
              </label>
            </li>
          </ul>
        )
      )}
    </div>
  );
};
export default CheckBox;
