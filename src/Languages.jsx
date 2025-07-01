import { Box, Typography, Chip } from '@mui/material';

export default function Languages() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5">Lenguajes de programación</Typography>
      <Box mt={2}>
        <Chip label="JavaScript" sx={{ m: 1 }} />
        <Chip label="Python" sx={{ m: 1 }} />
        <Chip label="C#" sx={{ m: 1 }} />
        <Chip label="HTML / CSS" sx={{ m: 1 }} />
      </Box>
    </Box>
  );
}
