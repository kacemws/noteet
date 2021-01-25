import "./Styles/App.scss";
import "./Styles/colors.scss";
import NoteView from "./Views/NoteView";
import Signin from "./Views/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Views/Signup";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { refreshExpiredToken, setAuthToken } from "./api/axios";
import Loader from "./Components/Loader";

function App() {
  /*Token*/
  const [token, setToken] = useState<string | null>(
    Cookies.get("accessToken") ?? ""
  ); // the actual token;
  /*Token*/

  const [interval, setIntervalHandler] = useState<number>(0);

  const [fetchingToken, setFetchingToken] = useState(true); // a variable that checks wheter we are refreshing the token or not

  useEffect(() => {
    window.clearInterval(interval); // to clear all sets interval for the check cookie function

    let cookieToken = Cookies.get("accessToken");
    let refreshToken = localStorage.getItem("refreshToken");

    /*to know wheter to ask for a new token or not*/
    if (
      cookieToken == undefined &&
      refreshToken != undefined &&
      refreshToken.length > 0
    ) {
      // if cookie expired
      refreshExpiredToken(refreshToken).then((res) => {
        console.log(res);

        var in15minutes = new Date(new Date().getTime() + 900000);

        Cookies.set("accessToken", res.data.accessToken, {
          expires: in15minutes,
        });
        localStorage.setItem("refreshToken", res.data.refreshToken);

        setAuthToken(res.data.accessToken);
        setToken(res.data.accessToken);
        //set the fetched credentials where needed : the cookie, local storage , the axios instance and finally the token variable that is local to the app file

        setFetchingToken(false);
        //refreshing done!!!

        let handler = window.setInterval(checkCookie, 100); // setting an interval each 100ms (0.1 seconds) to execute the check cookie function ( check line 58)
        setIntervalHandler(handler);
      });
    } else {
      // if both undefined of both defined ( refresh_token && access_token)
      setFetchingToken(false);
      let handler = window.setInterval(checkCookie, 100); // setting an interval each 100ms (0.1 seconds) to execute the check cookie function ( check line 58)
      setIntervalHandler(handler);
    }
  }, []);

  const checkCookie = (function () {
    // function to check wheter cookie changed or not

    var lastCookie = document.cookie; // 'static' memory between function calls (old cookie)

    return function () {
      var currentCookie = document.cookie; // current cookie;

      if (currentCookie != lastCookie) {
        // if cookie changed
        lastCookie = currentCookie;
        console.log("changed a cookie!");
        let token =
          Cookies.get("accessToken") != undefined
            ? Cookies.get("accessToken")
            : "no token";
        if (token == "no token") {
          console.log("token expired...");
        }
        setToken(token ?? ""); //set token stored inside the new cookie
      }
    };
  })();

  if (token != "") {
    setAuthToken(token);
  }

  let routes; // declaring the routes

  if (token === "") {
    routes = (
      <Switch>
        <Route path="/sign-up" component={Signup} />
        <Route exact path="/" component={Signin} />
        {/*done*/}
        <Route path="*">
          <h1>404 error</h1>
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" render={() => <NoteView />} />
        <Route path="" render={() => <h1>404 error</h1>} />
      </Switch>
    );
  }

  return (
    <Router>
      <div
        style={{
          height: "100%",
          minHeight: "100vh",
        }}
      >
        {fetchingToken ? <Loader /> : routes}
      </div>
    </Router>
  );
}

export default App;
