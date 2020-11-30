/**
 *
 * Asynchronously loads the component for BankForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ReminderForm = lazyLoad(
  () => import('./index'),
  module => module.ReminderForm,
);
