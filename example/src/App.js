import React, { Component } from "react";

import { Snapshare, SnapshareCustom } from "react-snapshare";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Default</h1>
        <Snapshare />
        <h1>Custom</h1>
        <SnapshareCustom customButtonStyles={{ background: "yellow" }} />
      </div>
    );
  }
}
