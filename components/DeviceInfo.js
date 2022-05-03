import { Typography } from '@mui/material';

export default function DeviceInfo({ name, lastModified, comment }) {
  return (
    <>
      <Typography variant="body1">{name}</Typography>
      {lastModified && (
        <Typography variant="body2" mt={1}>
          Last modified: {new Date(lastModified).toLocaleString()}
        </Typography>
      )}
      {comment && <Typography variant="body2">{comment}</Typography>}
    </>
  );
}
