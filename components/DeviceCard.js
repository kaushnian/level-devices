import { Paper, Typography } from '@mui/material';

import { DndItemTypes } from '../constants';
import { useDrag } from 'react-dnd';

export default function DeviceCard({ name, id, lastModified, comment }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DndItemTypes.DEVICE,
      item: { id },
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id]
  );

  return (
    <Paper
      ref={drag}
      sx={{ p: 1, mb: 1, opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      <Typography variant="body1">{name}</Typography>
      {lastModified && (
        <Typography variant="body2" mt={1}>
          Last modified: {new Date(lastModified).toLocaleString()}
        </Typography>
      )}
      {comment && <Typography variant="body2">{comment}</Typography>}
    </Paper>
  );
}
