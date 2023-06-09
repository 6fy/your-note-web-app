import { Box, Stack, Typography } from '@mui/material';
import { FiLock } from 'react-icons/fi';
import { TfiReload } from 'react-icons/tfi';

const Product = () => {
  return (
    <Box
      position="relative"
      height={{ xs: '50vh', md: '100vh' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        ml: { xs: '2.5%', md: '5%' },
        mr: { xs: '2.5%', md: '5%' },
        mt: { xs: '10%', md: '10%' },
      }}
    >
      <Box
        position="absolute"
        sx={{
          width: '90vw',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 5,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.11)',
          padding: '1%',
          textAlign: 'center',
          zIndex: '1',
        }}
      >
        <Stack direction="row" alignItems="center">
          <Stack direction="row" spacing={2} width={{ xs: '25vw', md: '40vw' }}>
            <Box
              height="13px"
              width="13px"
              bgcolor="#FF007A"
              borderRadius="100%"
              sx={{
                cursor: 'pointer',
              }}
            ></Box>
            <Box
              height="13px"
              width="13px"
              bgcolor="#FFE600"
              borderRadius="100%"
              sx={{
                cursor: 'pointer',
              }}
            ></Box>
            <Box
              height="13px"
              width="13px"
              bgcolor="#05FF00"
              borderRadius="100%"
              sx={{
                cursor: 'pointer',
              }}
            ></Box>
          </Stack>
          <Stack
            direction="row"
            bgcolor="rgba(255,255,255,0.1)"
            padding={1}
            alignItems="center"
            spacing={2}
            borderRadius="6px"
          >
            <FiLock color="grey" />
            <Typography color="white">https://notes.wmte.io</Typography>
            <TfiReload color="white" cursor="pointer" />
          </Stack>
        </Stack>
        <img
          width="90%"
          src="https://raw.githubusercontent.com/mertsabinov/your-note-web-app/main/src/assets/banner.png"
          alt="banner"
          style={{
            marginTop: '1.5%',
            marginBottom: '1.5%',
            borderRadius: '15px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Product;
