import { Avatar, Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <Box textAlign="center" mt={4}>
      <Avatar
        alt="Íkiam Zurita"
        src="/IkiFoto.jpg"  // Coloca la foto en la carpeta public y cambia el nombre
        sx={{ width: 120, height: 120, margin: 'auto' }}
      />
      <Typography variant="h4" mt={2}>Íkiam Zurita</Typography>
      <Typography variant="subtitle1">Docente universitario, desarrollador de videojuegos y VR</Typography>
    </Box>
  );
}
