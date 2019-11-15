import React, { Component } from "react";

import { Snapshare, SnapshareCustom } from "react-snapshare";

export default class App extends Component {
  render() {
    return (
      <div>
        <Snapshare />
        <SnapshareCustom customButtonStyles={{ background: "yellow" }} />
      </div>
    );
  }
}
