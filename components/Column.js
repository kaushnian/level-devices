import * as colors from '@mui/material/colors';

import DeviceCardList from './DeviceCardList';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Column({ name, id, devices, onDrop, color }) {
  return (
    <Paper
      sx={{
        background: colors[color][100],
        p: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="h5" sx={{ pl: 1 }}>
        {name}
      </Typography>
      <DeviceCardList devices={devices} onDrop={onDrop} columnId={id} />
    </Paper>
  );
}
