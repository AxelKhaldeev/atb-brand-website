import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import Layout from "../components/Layout";

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Бренд «АТВ» – О нас</title>
      </Helmet>

      <Container maxWidth="md">
        <Typography variant="h2" component="h2" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
          Бренд «АТВ»
        </Typography>
        <Box sx={{ pb: 10 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Бренд «АТВ» - это производственно-торговая компания, основным профилем деятельности, которой является производство и продажа кузовных деталей. Запчасти «АТВ» на легковые и грузовые автомобили производят сертифицированные ведущими мировыми автопроизводителями заводы России, Кореи, Китайской Народной Республики и Тайваня. Это позволяет обеспечить высокий уровень качества продукции и доступные цены. Вся продукция сертифицирована и соответствует требованиям технических регламентов Таможенного союза и Евразийского экономического союза.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>​
            Миссия «АТВ» – обеспечение наивысшего качества продукции, отвечающей высоким международным стандартам и достижения высокого уровня удовлетворенности клиентов. Тысячи владельцев автомобилей по достоинству оценили высококачественные детали бренда «АТВ»
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Бренд «АТВ»: Ваш автомобиль – наш главный приоритет.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}

export default AboutPage
