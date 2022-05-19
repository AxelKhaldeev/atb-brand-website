import * as React from 'react';
import { useState } from 'react';

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages = [
  { title: 'Главная', to: '/' },
  { title: 'Католаг', to: '/catalog' },
  { title: 'О нас', to: '/about' },
  { title:'Контакты', to: '/contact' },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuList = () => (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={() => setMobileMenuOpen(false)}
      onKeyDown={() => setMobileMenuOpen(false)}
    >
      <List>
        {pages.map((page, i) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton
              component={GatsbyLink}
              to={page.to}
            >
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <>
      <AppBar sx={{ background: 'white', color: 'black' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>

            <Box sx={{ flexGrow: 1, position: 'absolute', display: { xs: 'flex', md: 'none' }}}>
              <IconButton
                aria-label="menu-burger"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon color="primary" />
              </IconButton>

              <Drawer
                anchor="left"
                open={isMobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
              >
                {mobileMenuList()}
              </Drawer>
            </Box>



            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center' } }}>
              <StaticImage
                src='../../images/atb_logo.jpeg'
                alt='ATB logo'
                height={70}
              />
            </Box>

            <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button
                  key={page.title}
                  component={GatsbyLink}
                  to={page.to}
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
