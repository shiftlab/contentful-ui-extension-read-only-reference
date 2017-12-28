import React, { Component } from "react";
import "./App.css";
import { initApi } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: {},
      value: "",
      link: "",
      ready: false
    };
  }

  componentWillMount() {
    initApi(api => {
      api.window.startAutoResizer();
      const value = api.field.getValue();
      if (value && value.sys && value.sys.id) {
        api.space.getEntry(value.sys.id).then(entry => {
          console.log(entry);
          this.setState({
            api,
            link: `https://app.contentful.com/spaces/${
              entry.sys.space.sys.id
            }/entries/${entry.sys.id}`,
            ready: true,
            value: entry.fields.title["en-US"]
          });
        });
      } else {
        this.setState({
          api,
          ready: true
        });
      }
    });
  }

  render() {
    const { value, link, ready } = this.state;

    if (!ready) return null;

    return (
      <div className="App">
        <span>
          <a target="_parent" href={link}>
            {value}
          </a>
        </span>
      </div>
    );
  }
}

export default App;
