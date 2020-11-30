import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { ReminderPage } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <ReminderPage />
    </HelmetProvider>,
  );

describe('<ReminderPage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
