import { Box, Paper } from '@mui/material';

import DeviceCard from './DeviceCard';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

export default function Column({ name }) {
  return (
    <Paper sx={{ background: grey[200], p: 1, flex: 1 }}>
      <Typography variant="h6" sx={{ mb: 1, pl: 1 }}>
        {name}
      </Typography>
      <Box sx={{ minHeight: 32 }}>
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
      </Box>
    </Paper>
  );
}
