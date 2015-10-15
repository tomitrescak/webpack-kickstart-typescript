import React from "react";
import mf from "../../i18n";

interface ILoadingParams {
  what: string;
}

export class CenteredLoading extends React.Component<ILoadingParams, {}> {
    render() {
      return (
        <div id="editorLoader">
          <div className="ui segment">
            <img src="/images/loading.gif" alt="" />&nbsp;&nbsp;&nbsp;{ mf(this.props.what) }
          </div>
        </div>
      );
    }
}

export class Loading extends React.Component<ILoadingParams, {}> {
    render() {
      return (
        <span>
          <img src="/images/loading.gif" alt="" />&nbsp;&nbsp;&nbsp;{ mf(this.props.what) }
        </span>
      );
    }
}

export default Loading;
