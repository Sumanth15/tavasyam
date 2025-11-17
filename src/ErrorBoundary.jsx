// src/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // store stack for debugging
    this.setState({ info });
    console.error(`Error in ${this.props.name || 'component'}`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          border: '1px solid #ffd2d2',
          background: '#fff6f6',
          color: '#7a1b1b',
          padding: 16,
          borderRadius: 8,
          margin: 8,
          fontFamily: 'Inter, Arial, sans-serif'
        }}>
          <strong>Error rendering {this.props.name || 'component'}</strong>
          <div style={{ marginTop: 8, fontSize: 13, color: '#6b1b1b' }}>
            {this.state.error && this.state.error.message}
          </div>
          <details style={{ marginTop: 8, fontSize: 12, color: '#5a1a1a' }}>
            <summary>Stack trace</summary>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.info ? this.state.info.componentStack : 'No stack available'}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
