import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

export default function DeviceDialog({ open, onClose, device }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Device Information</DialogTitle>
      <DialogContent>
        <ul>
          {Object.entries(device).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
