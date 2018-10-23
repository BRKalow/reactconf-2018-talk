import React, { PureComponent } from 'react';
import Refresh from './refresh';

const CHECK_INTERVAL = 1800000;

class ClientVersionCheck extends PureComponent {
  componentDidMount() {
    this.interval = setInterval(this.checkVersion, CHECK_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async checkVersion = () => {
    const currentVersion = await getCurrentVersion();

    if (!this.clientVersion) {
      this.clientVersion = currentVersion;
      return;
    }

    if (this.clientVersion !== currentVersion)
      this.setState({ shouldRefresh: true });
  }

  render() {
    if (this.state.shouldRefresh) return <Refresh />;

    return null;
  }
}
