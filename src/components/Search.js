import { useState } from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import RepoList from '../components/RepoList';
import UserList from '../components/UserList';
import gitHubIcon from '../images/github.png';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Container >
                <Grid> 
                    <Grid container sx={{justifyContent: 'center' }}>                        
                        <CardMedia
                            sx={{ width: 125 }}
                            component="img"
                            image={gitHubIcon}
                            alt="github"
                        />
                    </Grid>

                    <Grid container sx={{justifyContent: 'center' }}>                        
                        <Typography variant="h4" color="text.primary">
                            Git Hub Repo Search
                        </Typography>
                    </Grid>

                    <Grid container sx={{justifyContent: 'center' }}>                        
                    <TextField sx={{ width: 300, m: 1  }} id="outlined-basic" label="Username" variant="outlined" 
                        placeholder="Enter a username and press Enter" 
                        // Note - change the below 'onClick' to 'onChange' for final functionality.
                        onKeyUp = {event => {
                            if (event.key === 'Enter' && event.target.value.length > 4) {
                                setSearchTerm(event.target.value.toLowerCase())  
                            }}}
                        onFocus = {event => {
                            event.target.value = '';
                        }}
                        />
                    </Grid>
                </Grid>
            </Container>

            <Container>
                        <Grid container>
                            <UserList searchTerm={searchTerm} xs={12} md={6} lg={4}/>
                            <RepoList searchTerm={searchTerm} xs={12} md={6} lg={4}/>
                        </Grid>     

            </Container>
        
        </div>

    )
}

export default Search;