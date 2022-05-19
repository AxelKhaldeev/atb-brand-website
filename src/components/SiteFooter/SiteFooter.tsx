import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import ContactSnippet from '../ContactSnippet';
import WorkHoursSnippet from '../WorkHoursSnippet';

import { StaticImage } from "gatsby-plugin-image"


export default function SiteFooter() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', py: 5, color: 'white' }}>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
        >
          <Box sx={{ my: 2, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <StaticImage
                src='../../images/atb_logo.jpeg'
                alt='ATB logo'
                height={70}
              />
            </Paper>
          </Box>
          <WorkHoursSnippet />
          <ContactSnippet />
        </Stack>
      </Container>
    </Box>
  );
}
