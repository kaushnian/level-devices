import { Box, Paper } from '@mui/material';

import DeviceCard from './DeviceCard';
import { DndItemTypes } from '../constants';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { useDrop } from 'react-dnd';

export default function Column({ name, id, devices, onDrop }) {
  const [_, drop] = useDrop(() => ({
    accept: DndItemTypes.DEVICE,
    drop: (item, monitor) => dropF(item, monitor),
  }));

  function dropF(item, monitor) {
    onDrop({ deviceId: item.id, newStatus: id.toUpperCase() });
  }

  return (
    <Paper
      sx={{
        background: grey[200],
        p: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="h6" sx={{ pl: 1 }}>
        {name}
      </Typography>
      <Box sx={{ flex: 1 }} ref={drop}>
        {devices.map(({ name, id, lastModified, comment }) => (
          <DeviceCard
            key={id}
            name={name}
            id={id}
            lastModified={lastModified}
            comment={comment}
          ></DeviceCard>
        ))}
      </Box>
    </Paper>
  );
}
