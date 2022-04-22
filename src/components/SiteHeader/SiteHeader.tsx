import * as React from 'react';

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


const pages = [
  { title: 'Главная', to: '/' },
  { title: 'Католаг', to: '/catalog' },
  { title: 'О нас', to: '/about' },
  { title:'Контакты', to: '/contact' },
];

export default function SiteHeader() {
  return (
    <>
      <AppBar sx={{ background: 'white', color: 'black' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '150px' }} /> */}
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <StaticImage
                src='../../images/atb_logo.png'
                alt='ATB logo'
                height={90}
              />
            </Box>

            <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'flex', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button
                  key={page.title}
                  component={GatsbyLink}
                  to={page.to}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: 'primary.main', display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
              <Link href="tel:+7 (495) 181-06-86" underline="none">
                <Typography variant="h6">+7 (495) 181-06-86</Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: '100px' }} />
    </>

  );
}
