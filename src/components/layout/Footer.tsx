import {Box, Typography} from '@mui/material';
import {FOOTER_TEXT} from '../../config/constants/labels';

function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2,
            m: 1,
        }}>
            <Typography variant='overline' display='block' gutterBottom>
                {`${FOOTER_TEXT}`}
            </Typography>
        </Box>
    );
}

export default Footer;
