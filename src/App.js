import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import SingPostPage from "./pages/SingPostPage";
import SingViewPage from "./pages/SingViewPage";

function App() {
  const [userObj, setUserObj] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  async function checkIsLoggedIn(token) {
    await axios
      .post("http://localhost:3001/api/checkIsLoggedIn", { token })
      .then((res) => {
        if (res.data.status === "success") {
          setUserObj(res.data);
          setIsLoggedIn(true);
        } else {
          setUserObj({});
          setIsLoggedIn(false);
        }
      });
  }
  useEffect(() => {
    checkIsLoggedIn(token);
  }, []);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userObj={userObj} />
      <Switch>
        <Route exact path="/">
          <MainPage userObj={userObj} />
        </Route>
        <Route path="/login">
          <LoginPage isLoggedIn={isLoggedIn} />
        </Route>
        <Route
          path="/register"
          isLoggedIn={isLoggedIn}
          component={RegisterPage}
        />
        <Route path="/post">
          <PostPage />
        </Route>
        <Route path="/singview/:id" component={SingViewPage} />

        <Route path="/singpost">
          <SingPostPage userObj={userObj} isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
