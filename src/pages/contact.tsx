import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import Layout from "../components/Layout";

import ContactSnippet from '../components/ContactSnippet';
import WorkHoursSnippet from '../components/WorkHoursSnippet';

// markup
const ContactPage = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
          Контакты
        </Typography>
        <Box sx={{ pb: 10, display: {sm: 'block', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <WorkHoursSnippet />
            <ContactSnippet />
          </Box>
          <StaticImage
            src='../images/contacts_img.jpeg'
            alt='Contacts'
            width={450}
          />
        </Box>
      </Container>
    </Layout>
  );
}

export default ContactPage
