import { Box, Typography, Chip } from '@mui/material';

export default function Skills() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5">Habilidades</Typography>
      <Box mt={2}>
        <Chip label="Comunicación" sx={{ m: 1 }} />
        <Chip label="Trabajo en equipo" sx={{ m: 1 }} />
        <Chip label="Creatividad" sx={{ m: 1 }} />
        <Chip label="Gestión de proyectos" sx={{ m: 1 }} />
        <Chip label="JavaScript" sx={{ m: 1 }} />
        <Chip label="React" sx={{ m: 1 }} />
        <Chip label="Unity" sx={{ m: 1 }} />
        <Chip label="Blender" sx={{ m: 1 }} />
      </Box>
    </Box>
  );
}
