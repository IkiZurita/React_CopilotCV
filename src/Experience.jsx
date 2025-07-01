import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Experience() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5">Experiencia profesional</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Docente universitario - UISEK / UDLA"
            secondary="Clases en música, modelado 3D, animación, desarrollo de videojuegos, titulación (2020 - actual)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Productor musical - Amayori Producciones"
            secondary="Producción de jingles, spots publicitarios y bandas sonoras (2018 - actual)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Desarrollador VR/AR"
            secondary="Proyectos para empresas como Banco Pichincha, Ecuapak y SIMED (2023 - actual)"
          />
        </ListItem>
      </List>
    </Box>
  );
}
