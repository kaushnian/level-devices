import DeviceCardInfo from './DeviceCardInfo';
import DeviceDialog from './DeviceDialog';
import { DndItemTypes } from '../constants';
import { Paper } from '@mui/material';
import { useDrag } from 'react-dnd';
import { useState } from 'react';

export default function DeviceCard({ device }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DndItemTypes.DEVICE,
    item: { id: device.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [open, setOpen] = useState(false);

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  return (
    <>
      <Paper
        onClick={openDialog}
        ref={drag}
        sx={{ p: 1, mb: 1, opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
      >
        <DeviceCardInfo device={device} />
      </Paper>

      <DeviceDialog open={open} onClose={closeDialog} device={device} />
    </>
  );
}
