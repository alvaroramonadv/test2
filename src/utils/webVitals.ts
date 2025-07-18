import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Função para reportar Web Vitals
function sendToAnalytics(metric: Metric) {
  // Em produção, você pode enviar para Google Analytics ou outro serviço
  console.log('Web Vital:', metric);
  
  // Exemplo para Google Analytics 4
  // gtag('event', metric.name, {
  //   event_category: 'Web Vitals',
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_label: metric.id,
  //   non_interaction: true,
  // });
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}