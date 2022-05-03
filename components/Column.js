import DeviceCardList from './DeviceCardList';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

export default function Column({ name, id, devices, onDrop }) {
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
      <DeviceCardList devices={devices} onDrop={onDrop} columnId={id} />
    </Paper>
  );
}
