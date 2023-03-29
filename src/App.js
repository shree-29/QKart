import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import { ThemeProvider } from "@mui/material";
import  theme from './theme';
import React from 'react';
import Checkout from "./components/Checkout";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
          {/* <Register /> */}
          <React.StrictMode>
          <ThemeProvider theme={theme}>
            

            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/checkout" component={Checkout} />
            </Switch>

            </ThemeProvider>
          </React.StrictMode>
          
          
    </div>
  );
}

export default App;
