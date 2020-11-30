/**
 *
 * Asynchronously loads the component for Pokemon
 *
 */
import React from 'react';
import { lazyLoad } from 'utils/loadable';

export const Pokemon = lazyLoad(
  () => import('./index'),
  module => module.Pokemon,
  { fallback: (<p>Loading.....</p>) },
);
