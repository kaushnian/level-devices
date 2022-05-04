import { act, render } from '@testing-library/react';

import Column from '../components/Column';
import Dashboard from '../components/Dashboard';

const { objectContaining, arrayContaining } = expect;

let triggerOnDrop;
jest.mock('../components/Column', () =>
  jest.fn().mockImplementation(props => {
    triggerOnDrop = props.onDrop;
  })
);

describe('Dashboard component', () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it('renders all the columns', () => {
    expect(Column).toBeCalledTimes(4);
    expect(Column).toBeCalledWith(objectContaining({ name: 'Requested' }), {});
    expect(Column).toBeCalledWith(objectContaining({ name: 'Purchased' }), {});
    expect(Column).toBeCalledWith(objectContaining({ name: 'Shipped' }), {});
    expect(Column).toBeCalledWith(objectContaining({ name: 'Installed' }), {});
  });

  it('puts the devices into the respective columns', () => {
    expect(Column).toBeCalledWith(
      objectContaining({
        name: 'Requested',
        devices: [
          objectContaining({ status: 'REQUESTED' }),
          objectContaining({ status: 'REQUESTED' }),
        ],
      }),
      {}
    );

    expect(Column).toBeCalledWith(
      objectContaining({
        name: 'Purchased',
        devices: [objectContaining({ status: 'PURCHASED' })],
      }),
      {}
    );

    expect(Column).toBeCalledWith(
      objectContaining({
        name: 'Shipped',
        devices: [
          objectContaining({ status: 'SHIPPED' }),
          objectContaining({ status: 'SHIPPED' }),
          objectContaining({ status: 'SHIPPED' }),
        ],
      }),
      {}
    );

    expect(Column).toBeCalledWith(
      objectContaining({
        name: 'Installed',
        devices: [
          objectContaining({ status: 'INSTALLED' }),
          objectContaining({ status: 'INSTALLED' }),
        ],
      }),
      {}
    );
  });

  it('moves devices between the columns', () => {
    expect(Column).toBeCalledWith(
      objectContaining({
        id: 'purchased',
        devices: [objectContaining({ id: 'device-2' })],
      }),
      {}
    );

    act(() => triggerOnDrop({ deviceId: 'device-2', columnId: 'installed' }));

    expect(Column).toBeCalledWith(
      objectContaining({
        id: 'purchased',
        devices: [],
      }),
      {}
    );

    expect(Column).toBeCalledWith(
      objectContaining({
        id: 'installed',
        devices: arrayContaining([objectContaining({ id: 'device-2' })]),
      }),
      {}
    );
  });
});
