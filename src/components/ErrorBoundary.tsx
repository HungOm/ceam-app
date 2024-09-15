// ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
    this.handleRetry = this.handleRetry.bind(this);
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state to display fallback UI on next render
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details if needed
    console.error("Uncaught error:", error, errorInfo);

    // Call the onError prop if provided (e.g., to report to an external service)
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Example: Integrate with an error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleRetry() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI with a retry button
      return (
        <div style={styles.fallbackContainer}>
          <h1>Something went wrong.</h1>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error.toString()}
              <br />
              {this.state.error.stack}
            </details>
          )}
          <button onClick={this.handleRetry} style={styles.retryButton}>
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Optional: Define some basic styles
const styles: { [key: string]: React.CSSProperties } = {
  fallbackContainer: {
    padding: '20px',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default ErrorBoundary;
