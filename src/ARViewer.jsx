import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';

const ARViewer = ({ modelPath }) => {
  const modelRef = useRef(null);

  useEffect(() => {
    // Убедимся, что компонент загружен и model-viewer существует
    if (modelRef.current) {
      // Можно дополнительно настроить модель после монтирования
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <model-viewer
        ref={modelRef}
        src={modelPath}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.webp"
        shadow-intensity="1"
        style={{ width: '100%', height: '100%' }}
      >
        <button slot="ar-button" style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '12px 24px',
          backgroundColor: '#007aff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          cursor: 'pointer'
        }}>
          Посмотреть в AR
        </button>
      </model-viewer>
    </div>
  );
};

export default ARViewer;