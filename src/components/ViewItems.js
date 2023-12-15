import React from 'react';
import NavigationBar from './NavigationBar';
import Card from '../components/Card';
import { Box } from '@mui/material';

const ViewItems = () => {

  return (
    <Box
      sx={{
        width: { xs: 400, sm: 786, md: 1024 },
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#567189',
        margin: 'auto'
      }}
    >
      <header>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NavigationBar />
        </Box>
      </header>
      <main >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }} >
          <h4 >Added Items</h4>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <Card />
        </Box>
      </main>
    </Box>
  )
}

export default ViewItems