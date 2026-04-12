import { useState, useEffect } from 'react';

export function useNetwork() {
  // По умолчанию проверяем текущий статус браузера
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Функции, которые будут менять стейт при смене статуса
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Подписываемся на события браузера
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Убираем слушатели при размонтировании (хорошая практика)
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}