'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children} : RootLayoutProps ) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}