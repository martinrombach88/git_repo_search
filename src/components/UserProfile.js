import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

const UserProfile = ({userInfo}) => {
    let joinDate = new Date(userInfo.created_at);

    return ( 
        <Card variant="outlined" sx={{ width: 400, m: 1 }}>
            {/* sx={{ m: 1 }} */}
            <CardContent>
                <Grid align="center">
                    <CardMedia 
                        sx={{ borderRadius: '50%', width: 200  }}
                        component="img"
                        image={userInfo.avatar_url}
                        alt="github"
                        align="center"
                    />
                </Grid>
                <Typography sx={{ fontWeight: 'bold', m: 1 }} variant="h6" color="text.primary" align="center">
                    {userInfo.name}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', mt: 1 }} variant="h6" color="text.primary">
                    Biography
                </Typography>
                <Typography sx={{ mt: 1, mb: 1.5 }} color="text.primary">
                    {userInfo.bio}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    Github Repositories: {userInfo.public_repos}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    Location: {userInfo.location}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    Followers: {userInfo.followers}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    Following: {userInfo.following}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    User Since: {joinDate.toDateString()}
                </Typography>
                <CardActions sx={{justifyContent: 'center' }}>
                    <Button size="large" href={userInfo.html_url} >VISIT GIT</Button>
                </CardActions>

            </CardContent>

        </Card>
     );
}
 
export default UserProfile;
