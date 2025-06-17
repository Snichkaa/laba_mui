import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: '#fff5f7',
      textAlign: 'center'
    }}>
      <Typography variant="body2" color="text.secondary">
        {new Date().getFullYear()} Мартошенко В.Ю., Б9122-09.03.03 (3), 2024-2025
      </Typography>
    </Box>
  );
}

export default Footer;