import { Container, Grid } from '@mui/material';
import rightLayoutPic from '../../config/images/rightLayoutPic.svg';
import leftLayoutPic from '../../config/images/leftLayoutPic.svg';
export interface ILayoutProps {
    children: JSX.Element[];
}

function Layout(props: ILayoutProps) {
    const { children } = props;

    return (
        <Container maxWidth='xl'>
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <Grid item xs={3}>
                    <img
                        src={rightLayoutPic}
                        alt='Right layout img'
                        height={2400}
                    />
                </Grid>
                <Grid item xs={6}>
                    {children}
                </Grid>
                <Grid item xs={3}>
                    <img src={leftLayoutPic} alt='Left layout img' height={2400} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Layout;
