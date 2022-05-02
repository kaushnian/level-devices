import { Box } from '@mui/material';
import Column from './Column';

const columns = [
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

export default function Dashboard(params) {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {columns.map(({ name, id }) => (
        <Column key={id} name={name}></Column>
      ))}
    </Box>
  );
}
