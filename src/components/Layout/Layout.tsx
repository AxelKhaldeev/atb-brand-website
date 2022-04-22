import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

import theme from '../../styles/theme';

type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteHeader />
      {children}
      <SiteFooter />
    </ThemeProvider>
  );
}
