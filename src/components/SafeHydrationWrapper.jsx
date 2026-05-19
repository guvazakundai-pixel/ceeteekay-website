import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function SafeHydrationWrapper({ children, skeleton = null }) {
  const hasMounted = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  if (!hasMounted) {
    return skeleton || <div className="w-full h-96 bg-ctk-100 animate-pulse rounded-sm" />;
  }

  return <>{children}</>;
}
