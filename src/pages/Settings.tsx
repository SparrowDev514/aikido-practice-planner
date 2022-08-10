import { Link } from "react-router-dom";
import CheckBox from "../conponents/CheckBox";

const Settings = () => {
  return (
    <>
      <div>設定</div>
      <Link to="/">戻る</Link>
      <hr />
      <table style={{ display: "flex" }}>
        <CheckBox
          elementKinds="tachikata"
          kataElementListsKey="tachikataList"
        />
        <CheckBox elementKinds="torikata" kataElementListsKey="torikataList" />
        <CheckBox elementKinds="waza" kataElementListsKey="wazaList" />
      </table>
    </>
  );
};

export default Settings;
