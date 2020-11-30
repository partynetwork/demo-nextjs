/**
 *
 * ReminderPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ReminderForm } from '../ReminderForm/Loadable';

interface Props {
}

export function ReminderPage(props: Props) {
  console.log('props', props);
  return (
    <>
      <Helmet>
        <title>ReminderPage</title>
        <meta name="description" content="Description of ReminderPage" />
        <ReminderForm />
      </Helmet>
    </>
  );
}
