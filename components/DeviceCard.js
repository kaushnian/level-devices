import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
} from '@mui/material';

import DeviceInfo from './DeviceInfo';
import { DndItemTypes } from '../constants';
import { useDrag } from 'react-dnd';
import { useState } from 'react';

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

  const [open, setOpen] = useState(false);

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  const deviceInfo = (
    <DeviceInfo
      name={name}
      lastModified={lastModified}
      comment={comment}
    ></DeviceInfo>
  );

  return (
    <>
      <Paper
        onClick={openDialog}
        ref={drag}
        sx={{ p: 1, mb: 1, opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
      >
        {deviceInfo}
      </Paper>

      <Dialog open={open} onClose={closeDialog} fullWidth>
        <DialogContent>{deviceInfo}</DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
