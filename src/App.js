import React from "react";
import Axios from "axios";

import { Container, Typography } from "@material-ui/core";

import TopBar from "../src/components/TopBar";
import ListCases from "../src/components/ListCases";
import "./styles.css";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    const BaseURL = "https://api.kawalcorona.com/indonesia/";

    Axios.get(BaseURL).then(res => {
      this.setState({
        data: res.data
      });
      // console.log(this.state.data);
    });
  }

  render() {
    return (
      <div>
        <TopBar />
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            DAERAH :
          </Typography>
          <ListCases cases={this.state.data} />
        </Container>
      </div>
    );
  }
}

export default App;
