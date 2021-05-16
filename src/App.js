// react-router-dom -> ルーティングを有効にする
// Link → aタグみたいなもの
// Switch → ルート設定
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* <BrowserRouter> で囲わないとルーティングされない！ */}
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        {/* to = "/" でHOMEに戻るパス */}
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
        {/* <Home /> */}
      </div>
      <Switch>
        <Route exact path="/">
          {/* path="/"だとRoute配下のものは<Home />が表示される */}
          {/* 完全一致以外は対象にしない場合は exact を使う */}
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
