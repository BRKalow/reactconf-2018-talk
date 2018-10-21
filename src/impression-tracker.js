import React, { Component, createContext } from 'react';

export const ImpressionContext = createContext();

export class ImpressionsManager extends Component {
  state = {};

  incrementImpressions = page => {
    debugger;
    this.setState(prevState => ({
      ...prevState,
      [page]: prevState[page] ? prevState[page] + 1 : 1
    }));
  };

  getContextValue = () => ({
    incrementImpressions: this.incrementImpressions,
    impressions: this.state
  });

  render() {
    return (
      <ImpressionContext.Provider value={this.getContextValue()}>
        {this.props.children}
      </ImpressionContext.Provider>
    );
  }
}

export const IncrementImpressions = props => (
  <ImpressionContext.Consumer>
    {({ incrementImpressions }) => <UnitOfWork didMount={() => incrementImpressions(props.page)} />}
  </ImpressionContext.Consumer>
);

export const ImpressionsCounter = props => (
  <ImpressionContext.Consumer>
    {({ impressions }) => impressions[props.page] || 0}
  </ImpressionContext.Consumer>
);

class UnitOfWork extends Component {
  componentDidMount() {
    if (typeof this.props.didMount === 'function') this.props.didMount.call(this, this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (typeof this.props.didUpdate === 'function')
      this.props.didUpdate.call(this, this, prevProps, prevState);
  }

  render() {
    return null;
  }
}
