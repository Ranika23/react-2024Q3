import { Component, ReactNode } from "react";
import Header from "./components/Header";

class Main extends Component {
  constructor(props: []) {
    super(props);
  }

  public render(): ReactNode {
    return (
    <Header />
    );
  }
}

export default Main;
