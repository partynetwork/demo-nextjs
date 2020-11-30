import React, { lazy, Suspense } from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

interface Opts {
  fallback: React.ReactNode;
}

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <T extends Promise<any>,
  U extends React.ComponentType<any>>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then(module => {
        return { default: selectorFunc(module) };
      });
  }
  const LazyComponent = lazy(lazyFactory);
  return (props: React.ComponentProps<U>): JSX.Element => {
    return (
      <ErrorBoundary>
        <Suspense fallback={opts?.fallback || false}>
          <LazyComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
};
