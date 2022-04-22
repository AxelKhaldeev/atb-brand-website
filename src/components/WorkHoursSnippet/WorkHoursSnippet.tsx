import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function WorkHoursSnippet() {
  return (
    <Box sx={{ my: 2, flexGrow: 1, flexFlow: 'column', display: 'flex' }}>
      <Typography variant="h6" gutterBottom component="div">Часы работы</Typography>
      <Typography variant="body1" component="div">ПН–ПТ: 07:00–19:00</Typography>
      <Typography variant="body1" component="div">СБ: 08:00–18:00</Typography>
    </Box>
  );
}
