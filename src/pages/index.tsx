import * as React from "react"

import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Бренд «АТВ» – Главная</title>
      </Helmet>
      <Container maxWidth="lg">
        <StaticImage
          src='../images/hero.jpg'
          alt='ATB logo'
        />

        <Box sx={{ mx: {sm: 0, md: 10}, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
            Масштабные идеи, отличные результаты
          </Typography>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "#eeeeee" }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="body1" component="div" sx={{ mb: 2 }}>
            У нас всегда в наличии большой ассортимент кузовных автозапчастей. Прямые поставки только качественных деталей позволяют предлагать клиентам оптимально-минимальные цены.
          </Typography>
          <Button
            variant="contained"
            component={GatsbyLink}
            to="/catalog"
          >
            Каталог
          </Button>
        </Container>
      </Box>
    </Layout>
  );
}

export default IndexPage
