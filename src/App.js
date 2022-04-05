import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const nodes = [
  {
    value: "sol",
    label: "Sol System",
    children: [
      { value: "mercury", label: "Mercury" },
      {
        value: "jupiter",
        label: "Jupiter",
        children: [
          { value: "io", label: "Io" },
          { value: "europa", label: "Europa" },
        ],
      },
    ],
  },
];

class App extends React.Component {
  state = {
    checked: [],
    expanded: ["sol"],
  };

  onCheck = checked => {
    console.log(checked);

    this.setState({ checked });
  };

  onExpand = expanded => {
    this.setState({ expanded });
  };

  render() {
    const { checked, expanded } = this.state;

    return (
      <CheckboxTree
        nodes={nodes}
        checkModel="all"
        checked={checked}
        expanded={expanded}
        // iconsClass="fa5"
        onCheck={this.onCheck}
        onExpand={this.onExpand}
        icons={{
          check: <span className="rct-icon rct-icon-check" />,
          uncheck: <span className="rct-icon rct-icon-uncheck" />,
        }}
      />
    );
  }
}

export default App;
