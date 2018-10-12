import React from "react";
import Tab from "./Tab";
class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {this.props.tabs.map(tab => {
            return <Tab tab={tab} 
            selectedTab={this.props.selectedTab}
            />;
          })}
        </div>
      </div>
    );
  }
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
