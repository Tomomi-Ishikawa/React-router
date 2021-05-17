// react-router-dom -> ルーティングを有効にする
// Link → aタグみたいなもの
// Switch → ルート設定
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
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
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {/*  
          render={() => (
            <Switch> 
            {console.log(props)}
              >>>
            defaltで以下の値が入ってる。
            {history: Object, location: Object, match: Object, staticContext: undefined} etc

            match: Object
              path: "/page1"
              url: "/page1"
              isExact: true
              params: Object
          */}
              {console.log(url)}
              {/* {} で、囲うこと */}
              {/* <Route exact path="/page1"> */}
              <Route exact path={url}>
                {/* テンプレート文字列 { `${}` }*/}
                <Page1 />
              </Route>
              {/* <Route path="/page1/detailA"> */}
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
