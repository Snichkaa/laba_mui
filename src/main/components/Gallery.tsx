import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import structures from "../../data";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';

const imgData = structures.slice(0, -1);

function Gallery() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ width: 800, height: 585, overflowY: 'scroll', m: '20px auto' }}>
                <ImageList
                    variant="masonry"
                    sx={{
                        columnCount: {
                            xs: '1 !important',
                            sm: '1 !important',
                            md: '2 !important',
                            lg: '3 !important',
                        },
                    }}
                    gap={8}>
                    {imgData.map((item, index) => (
                        <Link 
                            to={`/building/${index}`} 
                            key={item.img}
                            style={{ textDecoration: 'none' }}
                        >
                            <ImageListItem>
                                <img
                                    srcSet={item.img}
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ cursor: 'pointer' }}
                                />
                                <ImageListItemBar position="bottom" title={item.title} />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

export default Gallery;