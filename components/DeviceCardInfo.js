import { Typography } from '@mui/material';

export default function DeviceCardInfo({
  device: { name, lastModified, comment },
}) {
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      {lastModified && (
        <Typography variant="body2" mt={1} data-testid="last-modified">
          Last modified: {new Date(lastModified).toLocaleString()}
        </Typography>
      )}
      {comment && (
        <Typography variant="body2" data-testid="comment">
          {comment}
        </Typography>
      )}
    </>
  );
}
