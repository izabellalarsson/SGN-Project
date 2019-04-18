import React, { Component } from "react";
import Layout from "../components/Layout";
import MakeAChange from "../components/MakeAChange";
import LoadingPage from "../components/LoadingPage";

export default class MakeAChangePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <Layout>
        {this.state.isLoading && <LoadingPage />}
        <MakeAChange />
      </Layout>
    );
  }
}
