import { useState } from 'react';
import { Toast } from '@/shared/components/Toast/Toast';
import './CopyEmailButton.css';

interface CopyEmailButtonProps {
  email: string;
  children: React.ReactNode;
}

export function CopyEmailButton({ email, children }: CopyEmailButtonProps) {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error('Erro ao copiar', error);
    }
  };

  return (
    <>
      <button onClick={handleCopy} className="icon-button">
        {children}
      </button>

      {showToast && <Toast message="Email copiado com sucesso!" />}
    </>
  );
}