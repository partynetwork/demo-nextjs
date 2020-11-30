/**
 *
 * Asynchronously loads the component for ReminderPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ReminderPage = lazyLoad(
  () => import('./index'),
  module => module.ReminderPage,
);
