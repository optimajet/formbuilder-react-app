import React from "react";
import { DWKitFormBuilder, DWKitFormViewer } from "./optimajet-builder";
import { builderProps, viewerProps } from "./builder-viewer-props";


class App extends React.Component {

  builderRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      showViewer: false,
      model: undefined
    }
  }

  toggleViewMode = () => {
    const model = this.builderRef?.current?.getData();
    this.setState({ showViewer: !this.state.showViewer, model })
  }

  render() {
    const { model, showViewer } = this.state;
    const buttons = [
      { name: "viewer", className: "ui button primary", onClick: this.toggleViewMode, text: showViewer ? "Show Builder" : "Show Viewer"}
    ]
    return (
      <div className="App">
        <div style={{display: "flex", justifyContent: "center", margin: 10}}>
          <button {...buttons[0]}>{buttons[0].text}</button>
        </div>
        {showViewer 
          ? <DWKitFormViewer {...viewerProps} model={model} />
          : <DWKitFormBuilder {...builderProps} ref={this.builderRef}/>
        }
      </div>
    );
  }
}

export default App;
