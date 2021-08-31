import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { ApiInstance } from "./lib/ApiInstance";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import SingListPage from "./pages/SingListPage";
import SingPostPage from "./pages/SingPostPage";
import SingViewPage from "./pages/SingViewPage";
import { actionCreators } from "./store/store";

function App() {
  const [userObj, setUserObj] = useState({});

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  async function checkIsLoggedIn(token) {
    await axios
      .post(`${ApiInstance}/checkIsLoggedIn`, { token })
      .then((res) => {
        if (res.data.status === "success") {
          setUserObj(res.data);
          dispatch(actionCreators.getUserObj(res.data.user));
        } else {
          setUserObj({});
        }
      });
  }
  useEffect(() => {
    checkIsLoggedIn(token);
  }, []);

  return (
    <BrowserRouter>
      <Header isLoggedIn={Boolean(userObj)} userObj={userObj} />
      <Switch>
        <Route exact path="/">
          <MainPage userObj={userObj} />
        </Route>
        <Route path="/login">
          <LoginPage isLoggedIn={Boolean(userObj)} />
        </Route>
        <Route
          path="/register"
          isLoggedIn={Boolean(userObj)}
          component={RegisterPage}
        />
        <Route path="/post">
          <PostPage />
        </Route>
        <Route path="/singview/:id" component={SingViewPage} />

        <Route path="/singpost">
          <SingPostPage userObj={userObj} isLoggedIn={Boolean(userObj)} />
        </Route>
        <Route path="/singlist" component={SingListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
