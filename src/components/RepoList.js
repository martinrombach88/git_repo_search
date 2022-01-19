import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
// https://api.github.com/users/martinrombach88/repos

const RepoList = ({ searchTerm }) => {

    let url = null;
    if (searchTerm !== '' || searchTerm == null) {
        url = `https://api.github.com/users/${ searchTerm }/repos`;
    } else {
        url = null;
    }
   
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (url != null) {
            fetch(url)
                .then(res => {
                    if (!res.ok) { 
                        throw Error('Username not found, please try another.');
                    } 
                    return res.json();
                }) 
                .then(data => {
                    if (data == null) {
                        throw Error('Username not found, try another.');
                    } 
                    const listItems = data.map((i) => { 
                        let li = 
                            
                            <Card key={i.name.toString()} sx={{ mt: 1,  }} variant="outlined">
                                <CardContent>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold', mb: 1.5}} color="text.primary">
                                        {i.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.primary">
                                        {i.description}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" href={i.html_url} >GO TO REPO</Button>
                                </CardActions>
                            </Card>
                            // <li key={i.name.toString()} className="listCard">
                            //     <strong>Name: </strong>{i.name}<br></br>
                            //     <strong>Description: </strong>{i.description}<br></br>
                            //     <strong>Link: </strong><a href={i.html_url}>{i.html_url}</a>
                            // </li>
                        return li;
                    });
                    setData(listItems);
                })
                .catch((error) => {
                        setError(error.message);    
                    });
            }
        
        
    }, [url]);

    if (!data) {
        return (
            <div>
            </div>
        )
    } else {
        return (
        <div>
        
            {data}
            
        </div>
        
      );
    }  

    
}

export default RepoList;

