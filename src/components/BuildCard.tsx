import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
    '&:last-child': {
        marginBottom: 0,
    },
}));

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    };
    cardIndex: number;
}

function BuildCard({ building, cardIndex }: ComponentProps) {
    const isFirstCard = cardIndex === 0;
    
    return (
        <Card sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: isFirstCard ? 'row' : 'row-reverse' },
            height: isFirstCard ? { md: '100%' } : 'auto',
            border: '4px solid',
            borderColor: '#ff80ab',
        }}>
            <CardMedia
                component="img"
                alt={building.title}
                image={building.img}
                sx={{ 
                    width: { xs: '100%', md: isFirstCard ? '40%' : '30%' },
                    height: isFirstCard ? { md: '100%' } : 'auto',
                    objectFit: 'cover',
                }}
            />
            <Box sx={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                p: 2,
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {building.title}
                    </Typography>
                    {building.description.map((item, ind) => (
                        <StyledTypography key={ind} variant="body2">
                            {item}
                        </StyledTypography>
                    ))}
                </CardContent>
                <CardActions sx={{ justifyContent: isFirstCard ? 'start' : 'end' }}>
                    <Button size="small">Подробнее</Button>
                </CardActions>
            </Box>
        </Card>
    );
}

export default BuildCard;