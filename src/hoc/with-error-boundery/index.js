import React from 'react';
import { ErrorBounderyPageContent } from '../../components/error-boundery';

export function withErrorBoundary(Component) {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false
      };
      this.retryRender = this.retryRender.bind(this);
    }

    static getDerivedStateFromError(error) {
      console.log(error);

      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }

    retryRender() {
      this.setState({ hasError: false });
    }

    render() {
      const { hasError } = this.state;

      if (hasError) {
        return <ErrorBounderyPageContent retry={this.retryRender} />;
      }

      return <Component {...this.props} />;
    }
  };
}
