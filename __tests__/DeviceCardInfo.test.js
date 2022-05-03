import { render, screen } from '@testing-library/react';

import DeviceCardInfo from '../components/DeviceCardInfo';

describe('DeviceCardInfo component', () => {
  it('renders the device name', () => {
    renderComponent({ name: 'test name' });

    expect(screen.getByRole('heading')).toHaveTextContent('test name');
  });

  describe('Last modified field', () => {
    it('does not render the field if the prop is not provided', () => {
      renderComponent({ name: 'test name' });

      expect(screen.queryByTestId('last-modified')).not.toBeInTheDocument();
    });

    it('renders the correct date/time if the prop is provided', () => {
      renderComponent({
        name: 'test name',
        lastModified: new Date().toISOString(),
      });

      expect(screen.queryByTestId('last-modified')).toHaveTextContent(
        'Last modified: 10/10/2010, 12:00:00 AM'
      );
    });
  });

  describe('Comment field', () => {
    it('does not render the field if the prop is not provided', () => {
      renderComponent({ name: 'test name' });

      expect(screen.queryByTestId('comment')).not.toBeInTheDocument();
    });

    it('renders the field if the prop is provided', () => {
      renderComponent({ name: 'test name', comment: 'test comment' });

      expect(screen.queryByTestId('comment')).toHaveTextContent('test comment');
    });
  });
});

function renderComponent(device) {
  render(<DeviceCardInfo device={device} />);
}
