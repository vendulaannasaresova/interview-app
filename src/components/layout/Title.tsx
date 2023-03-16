import {Grid, Typography} from '@mui/material';
import {TITLE_SUB_1, TITLE_SUB_2, TITLE} from '../../config/constants/labels';

function Title() {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='overline' display='block' gutterBottom>
                {TITLE_SUB_1}
            </Typography>
            <Typography variant={'h2'}>{TITLE}</Typography>
            <Typography variant='overline' display='block' gutterBottom>
                {TITLE_SUB_2}
            </Typography>
        </Grid>
    );
}

export default Title;
