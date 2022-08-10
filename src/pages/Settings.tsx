import { tachiKataList, torikataList, wazaList } from "../consts/index";
import { Torikata, Waza } from "../types/type";

const Settings = () => {
  return (
    <>
      <div>設定</div>
      <hr />
      <table style={{ display: "flex" }}>
        <tbody>
          {tachiKataList.map((tachiKata: string) => (
            <tr key={tachiKata} style={{ flex: 1 }}>
              <td>{tachiKata}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {torikataList.map((torikata: Torikata) => (
            <tr key={torikata.name} style={{ flex: 1 }}>
              <td>{torikata.name}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
          {wazaList.map((waza: Waza) => (
            <tr key={waza.name} style={{ flex: 1 }}>
              <td>{waza.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Settings;
