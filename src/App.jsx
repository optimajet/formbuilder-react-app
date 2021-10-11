import React from "react";
import { DWKitFormBuilder, DWKitFormViewer, DWKitStore } from "./optimajet-builder";
import { builderProps, viewerProps } from "./builder-viewer-props";

const HideIf = ({ condition, ...props }) => <div style={{ display: condition ? "none" : "initial" }} {...props} />

class App extends React.Component {

  builderRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      showViewer: false,
      model: undefined
    }
  }

  componentDidMount() {
    this.builderRef?.current?.load('./application-form');
    this.setState({ dataurl: "./application-form-data.json" })
    DWKitStore.listen(function (form) {
      // log form data on change
      console.log('Form data changed');
      console.log(JSON.stringify(form));
    });
  };

  toggleViewMode = () => {
    const model = this.builderRef?.current?.getData();
    this.setState({ showViewer: !this.state.showViewer, model })
  }

  render() {
    const { model, showViewer, dataurl } = this.state;
    const headerProps = { style: { display: "flex", justifyContent: "center", margin: 10 } };
    const buttonProps = {
      className: "ui button primary",
      onClick: this.toggleViewMode,
      children: showViewer ? "Show Builder" : "Show Viewer"
    };

    return (
      <div className="App">
        <div {...headerProps}> <button {...buttonProps} /> </div>
        {showViewer && <DWKitFormViewer {...{ ...viewerProps, model, dataurl }} />}
        <HideIf condition={showViewer}>
          <DWKitFormBuilder {...builderProps} ref={this.builderRef} />
        </HideIf>
      </div>
    );
  }
}

export default App;
