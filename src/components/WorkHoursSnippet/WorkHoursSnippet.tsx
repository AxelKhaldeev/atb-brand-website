import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function WorkHoursSnippet() {
  return (
    <Box sx={{ my: 2, flexGrow: 1, flexFlow: 'column', display: 'flex' }}>
      <Typography variant="h6" gutterBottom component="div">Часы работы</Typography>
      <Typography variant="body1" component="div">ПН–ПТ: 08:00–17:00</Typography>
    </Box>
  );
}
