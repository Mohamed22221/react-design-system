import { useState, useCallback } from 'react';

// 🔹 Custom Hook للـ Throttle مع State وTypes صحيحة
function useThrottle<T extends (...args: T[]) => void | Promise<void>>(
  callback: T,
  delay: number = 1000
): [(...args: Parameters<T>) => void, boolean] {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledFunction = useCallback(
    (...args: Parameters<T>): void => {
      if (!isThrottled) {
        callback(...args);
        setIsThrottled(true);

        setTimeout(() => {
          setIsThrottled(false);
        }, delay);
      } 
    },
    [callback, delay, isThrottled]
  );

  return [throttledFunction, isThrottled];
}

// 🔹 المكون الرئيسي
export const ThrottleButtonExample = () => {
  const [count, setCount] = useState<number>(0);
  const [apiCalls, setApiCalls] = useState<string[]>([]);

  // دالة إرسال الطلب
  const sendRequest = useCallback((): void => {
    const timestamp = new Date().toLocaleTimeString('ar-EG');
    setApiCalls((prev) => [...prev, `طلب تم إرساله في ${timestamp}`]);
    setCount((prev) => prev + 1);
    console.log('✅ تم إرسال الطلب');
  }, []);

  // تطبيق throttle مع معرفة الحالة
  const [throttledSend, isThrottled] = useThrottle(sendRequest, 2000);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>
        Throttle مع State وTypes صحيحة
      </h2>

      {/* 🔹 الزر مع مؤشر بصري للحالة */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={throttledSend}
          disabled={isThrottled}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: isThrottled ? '#95a5a6' : '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: isThrottled ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s',
            opacity: isThrottled ? 0.6 : 1,
            position: 'relative',
          }}
        >
          {isThrottled ? '⏳ انتظر...' : '📤 إرسال طلب'}
        </button>

        {/* مؤشر بصري */}
        {isThrottled && (
          <span
            style={{
              display: 'inline-block',
              marginRight: '12px',
              padding: '8px 16px',
              backgroundColor: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '4px',
              color: '#856404',
              fontSize: '14px',
            }}
          >
            ⚠️ يمكنك الإرسال مرة أخرى بعد ثانيتين
          </span>
        )}
      </div>

      {/* 🔹 عداد الطلبات */}
      <div
        style={{
          padding: '16px',
          backgroundColor: '#ecf0f1',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <p style={{ fontSize: '18px', margin: 0, color: '#2c3e50' }}>
          عدد الطلبات المرسلة:{' '}
          <strong style={{ color: '#e74c3c', fontSize: '24px' }}>{count}</strong>
        </p>
        <p style={{ fontSize: '14px', color: '#7f8c8d', marginTop: '8px' }}>
          💡 حالة الزر: {isThrottled ? '🔴 مؤجل' : '🟢 جاهز'}
        </p>
      </div>

      {/* 🔹 سجل الطلبات */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #bdc3c7',
          borderRadius: '8px',
          padding: '16px',
          maxHeight: '300px',
          overflowY: 'auto',
        }}
      >
        <h3 style={{ margin: '0 0 12px 0', color: '#34495e', fontSize: '16px' }}>
          📋 سجل الطلبات ({apiCalls.length}):
        </h3>
        {apiCalls.length === 0 ? (
          <p style={{ color: '#95a5a6', fontStyle: 'italic' }}>
            لم يتم إرسال أي طلبات بعد
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {apiCalls.map((call, index) => (
              <li
                key={index}
                style={{
                  padding: '8px 12px',
                  backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
                  borderRadius: '4px',
                  marginBottom: '4px',
                  fontSize: '14px',
                  color: '#2c3e50',
                  borderRight: '3px solid #3498db',
                }}
              >
                {index + 1}. {call}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
