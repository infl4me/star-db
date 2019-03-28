import React from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default (Component, asd) => (
  class WithHandlers extends React.Component {
    state = {
      loading: true,
      error: false,
      data: null,
    }

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      const { selectedId } = this.props;
      if (prevProps.selectedId !== selectedId) {
        this.updateData();
      }
    }

    updateData() {
      this.setState({ loading: true });
      const { selectedId, getData } = this.props;
      const asq = getData || asd;
      asq(selectedId)
        .then((data) => {
          this.setState({ data, loading: false });
        })
        .catch(() => {
          this.setState({ loading: false, error: true });
        });
    }

    render() {
      const { loading, error, data } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      const { children } = this.props;
      return <Component {...this.props} data={data}>{children}</Component>;
    }
  }
);
