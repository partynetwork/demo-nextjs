import React from 'react';
import { render } from '@testing-library/react';

import { TodoMangePage } from '..';

const renderComponent = () => render(<TodoMangePage />);

describe('<TodoMangePage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
