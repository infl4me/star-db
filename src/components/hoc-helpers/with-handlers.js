import React from 'react';
import Spinner from '../spinner';

export default (Component, getData) => (
  class extends React.Component {
    state = {
      loading: true,
      error: false,
      data: null,
    }

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.selectedId !== this.props.selectedId) {
        this.updateData();
      }
    }

    updateData() {
      this.setState({ loading: true });
      const { selectedId } = this.props;
      getData(selectedId)
        .then((data) => {
          this.setState({ data, loading: false });
        });
    }

    render() {
      const { loading, error, data } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <div>error</div>;
      }
      return <Component {...this.props} data={data} />;
    }
  }
);
