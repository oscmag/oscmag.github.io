import React, { Component } from 'react';

export const MainContext = React.createContext()

export class MainProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount = () => {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    const isMobile = window.innerWidth <= 615 ? true : false;
    this.setState({isMobile});
  }

  render() {
    return <MainContext.Provider value={this.state}>
      {this.props.children}
    </MainContext.Provider>
  }
}

export const MainConsumer = MainContext.Consumer;