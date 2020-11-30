/**
 *
 * Asynchronously loads the component for TodoMangePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TodoMangePage = lazyLoad(
  () => import('./index'),
  module => module.TodoMangePage,
);
