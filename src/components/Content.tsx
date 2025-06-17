import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import structures from "../data";
import BuildCard from "./BuildCard";

const cardData = [structures[3], structures[6], structures[9], structures[7]];

function Content() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 3, md: 6 }
            }}>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <BuildCard building={cardData[0]} cardIndex={0} />
                </Box>
                
                <Box sx={{ 
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 3, md: 6 }
                }}>
                    {cardData.slice(1).map((item, index) => (
                        <BuildCard 
                            key={index + 1} 
                            building={item} 
                            cardIndex={index + 1} 
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Content;