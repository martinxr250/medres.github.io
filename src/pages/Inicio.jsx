import React, { useState } from 'react';

const LandingPage = () => {
  const [code, setCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '48px 16px',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1f2937',
      marginBottom: '32px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '32px',
      overflow: 'hidden',
    },
    cardHeader: {
      backgroundColor: '#e5e7eb',
      padding: '16px',
      borderBottom: '1px solid #d1d5db',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#374151',
    },
    cardContent: {
      padding: '16px',
    },
    textarea: {
      width: '100%',
      minHeight: '200px',
      padding: '8px',
      fontSize: '14px',
      fontFamily: 'monospace',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      resize: 'vertical',
    },
    codeBlock: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '16px',
      borderRadius: '4px',
      overflowX: 'auto',
      fontSize: '14px',
      fontFamily: 'monospace',
      position: 'relative',
    },
    copyButton: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '6px 12px',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    buttonIcon: {
      marginRight: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Código Python del Profesor</h1>
        
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Subir Código (Profesor)</h2>
          </div>
          <div style={styles.cardContent}>
            <textarea
              placeholder="Pegue aquí el código Python..."
              value={code}
              onChange={handleCodeChange}
              style={styles.textarea}
            />
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Código para Copiar (Alumnos)</h2>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.codeBlock}>
              <pre>
                <code>{code || 'El profesor aún no ha subido ningún código.'}</code>
              </pre>
              {code && (
                <button onClick={handleCopyCode} style={styles.copyButton}>
                  <span style={styles.buttonIcon}>
                    {isCopied ? '✓' : '📋'}
                  </span>
                  {isCopied ? 'Copiado' : 'Copiar'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
