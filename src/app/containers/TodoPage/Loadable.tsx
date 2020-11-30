/**
 *
 * Asynchronously loads the component for TodoPage
 *
 */

import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import * as React from 'react';
import { LoadingWrapper } from '../HomePage/Loadable';

export const TodoPage = lazyLoad(
  () => import('./index'),
  module => module.TodoPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
