import "./App.css";
import { RecoilRoot } from "recoil";
import Router from "./router/Router";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
};

export default App;
