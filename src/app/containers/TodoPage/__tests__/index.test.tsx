import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { TodoPage } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <TodoPage />
    </HelmetProvider>,
  );

describe('<TodoPage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
