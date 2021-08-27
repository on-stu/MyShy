import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";

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
        <Route exact path="/" isLoggedIn={isLoggedIn} component={MainPage} />
        <Route path="/login">
          <LoginPage isLoggedIn={isLoggedIn} />
        </Route>
        <Route
          path="/register"
          isLoggedIn={isLoggedIn}
          component={RegisterPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
