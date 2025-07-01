import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export default function Projects() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5" gutterBottom>Proyectos destacados</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Juego educativo Banco Pichincha</Typography>
              <Typography variant="body2">
                Desarrollo de un serious game en Roblox para fomentar el trabajo en equipo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Simuladores VR para Ecuapak</Typography>
              <Typography variant="body2">
                Realidad mixta para visualización y entrenamiento en maquinaria industrial.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Marimba VR</Typography>
              <Typography variant="body2">
                Instrumento musical virtual que combina sonido 3D e interacción en realidad virtual.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
