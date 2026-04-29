import './Loading.css';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export function Loading({ message = 'Carregando...', fullScreen = false }: LoadingProps) {
  const loadingContent = (
    <div className="loading-content">
      <div className="spinner"></div>
      <p className="loading-message">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="loading-fullscreen">
        {loadingContent}
      </div>
    );
  }

  return (
    <div className="loading-container">
      {loadingContent}
    </div>
  );
}
