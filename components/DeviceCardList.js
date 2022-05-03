import { Box } from '@mui/material';
import DeviceCard from './DeviceCard';
import { DndItemTypes } from '../constants';
import { useDrop } from 'react-dnd';

export default function DeviceCardList({ devices, columnId, onDrop }) {
  const [_, drop] = useDrop(() => ({
    accept: DndItemTypes.DEVICE,
    drop: device => {
      onDrop({ deviceId: device.id, columnId });
    },
  }));

  return (
    <Box sx={{ flex: 1 }} ref={drop}>
      {devices.map(device => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </Box>
  );
}
