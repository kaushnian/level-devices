import { Box } from '@mui/material';
import Column from './Column';
import { getDevices } from '../data/devices';
import { useState } from 'react';

/** The column IDs correspond to the device statuses */
const COLUMNS = [
  {
    name: 'Requested',
    id: 'requested',
  },
  {
    name: 'Purchased',
    id: 'purchased',
  },
  {
    name: 'Shipped',
    id: 'shipped',
  },
  {
    name: 'Installed',
    id: 'installed',
  },
];

export default function Dashboard() {
  const [devices, setDevices] = useState(() => getDevices());

  function updateDevice({ deviceId, columnId }) {
    setDevices(devices =>
      devices.map(device => {
        if (device.id === deviceId) {
          return {
            ...device,
            status: columnId.toUpperCase(),
            lastModified: new Date().toISOString(),
            comment: `Previous status: ${device.status}`,
          };
        }

        return device;
      })
    );
  }

  function filterDevices(columnId) {
    return devices.filter(({ status }) => status.toLowerCase() === columnId);
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {COLUMNS.map(({ name, id }) => (
        <Column
          key={id}
          name={name}
          id={id}
          devices={filterDevices(id)}
          onDrop={updateDevice}
        ></Column>
      ))}
    </Box>
  );
}
