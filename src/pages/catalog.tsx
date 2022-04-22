import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Layout from "../components/Layout";

import catalogData from '../data/catalog.json';


const getRowCellSx = (row) => {
  if (!row.brand && !row.title) {
    return { fontWeight: 'bold', backgroundColor: '#eee' };
  }
  return {};
}

// markup
const CatalogPage = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
          Каталог продукции
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 10 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Артикул</TableCell>
                <TableCell>Бренд</TableCell>
                <TableCell>Наименование</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {catalogData.map((row) => (
                <TableRow
                  key={row.art}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    sx={getRowCellSx(row)}
                    colSpan={(row.brand && row.title) ? null : 3}
                  >
                    {row.art}
                  </TableCell>
                  { row.brand && <TableCell>{row.brand}</TableCell> }
                  { row.title && <TableCell>{row.title}</TableCell> }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Container>
    </Layout>
  );
}

export default CatalogPage
