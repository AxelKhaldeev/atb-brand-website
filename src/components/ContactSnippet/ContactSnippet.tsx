import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function ContactSnippet() {
  return (
    <Box sx={{ my: 2, flexGrow: 1, flexFlow: 'column', display: 'flex' }}>
      <Typography variant="h6" gutterBottom component="div">Контакты</Typography>
      <Typography variant="body1" component="div">г. Москва Южнопортовый 2-й проезд, 10</Typography>
      <Typography variant="body1" component="div">
        <Link href="tel:+74951810686" color="inherit" underline="hover">+7 (495) 181-12-45</Link>
      </Typography>
      <Typography variant="body1" component="div">
        <Link href="mailto:info@atbcom.ru" color="inherit" underline="hover">info@atbcom.ru</Link>
      </Typography>
    </Box>
  );
}
