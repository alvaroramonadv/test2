import { lazy, Suspense } from 'react';
import type { LucideIcon } from 'lucide-react';

// Lazy load ícones para reduzir bundle inicial - só carrega quando necessário
const iconMap = {
  Heart: lazy(() => import('lucide-react').then(module => ({ default: module.Heart }))),
  Shield: lazy(() => import('lucide-react').then(module => ({ default: module.Shield }))),
  Clock: lazy(() => import('lucide-react').then(module => ({ default: module.Clock }))),
  FileText: lazy(() => import('lucide-react').then(module => ({ default: module.FileText }))),
  Users: lazy(() => import('lucide-react').then(module => ({ default: module.Users }))),
  Scale: lazy(() => import('lucide-react').then(module => ({ default: module.Scale }))),
  CheckCircle: lazy(() => import('lucide-react').then(module => ({ default: module.CheckCircle }))),
  Star: lazy(() => import('lucide-react').then(module => ({ default: module.Star }))),
  MapPin: lazy(() => import('lucide-react').then(module => ({ default: module.MapPin }))),
  Phone: lazy(() => import('lucide-react').then(module => ({ default: module.Phone }))),
  ArrowRight: lazy(() => import('lucide-react').then(module => ({ default: module.ArrowRight }))),
  Zap: lazy(() => import('lucide-react').then(module => ({ default: module.Zap }))),
};

interface LazyIconProps {
  name: keyof typeof iconMap;
  className?: string;
  size?: number;
  [key: string]: any;
}

const LazyIcon = ({ name, ...props }: LazyIconProps) => {
  const IconComponent = iconMap[name];
  
  return (
    <Suspense fallback={<div className="w-6 h-6 bg-primary/20 rounded animate-pulse" style={{ width: props.size || 24, height: props.size || 24 }} />}>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default LazyIcon;