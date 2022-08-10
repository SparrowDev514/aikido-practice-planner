import { Link } from "react-router-dom";
import CheckBox from "../conponents/CheckBox";

const Settings = () => {
  return (
    <div style={{ display: "inline-flex" }}>
      <div>
        表示する型の要素を選択する
        <br />
        <Link to="/">戻る</Link>
      </div>
      <CheckBox elementKinds="tachikata" kataElementListsKey="tachikataList" />
      <CheckBox elementKinds="torikata" kataElementListsKey="torikataList" />
      <CheckBox elementKinds="waza" kataElementListsKey="wazaList" />
    </div>
  );
};

export default Settings;
