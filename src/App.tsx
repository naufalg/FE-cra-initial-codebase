import React from "react";
import { AppRouter } from "./routes/index";
import { withRouter } from "react-router-dom";

class App extends React.Component<any, any> {
  render() {
    return <AppRouter />;
  }
}

export default withRouter(App);
