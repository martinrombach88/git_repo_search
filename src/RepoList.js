import { useEffect, useState } from 'react';

// https://api.github.com/users/martinrombach88/repos

const RepoList = ({ searchTerm }) => {
    let url = null;
    if (searchTerm !== '' || searchTerm == null) {
        url = `https://api.github.com/users/${ searchTerm }/repos`;
    } else {
        url = null;
    }
    //403 = Unauthorised --> Integrate with API Key for further searches.
   
    const [data, setData] = useState(null);
    const [dataLength, setDataLength] = useState(null);
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
                            <li key={i.name.toString()} className="listCard">
                                <strong>Name: </strong>{i.name}<br></br>
                                <strong>Description: </strong>{i.description}<br></br>
                                <strong>Link: </strong><a href={i.html_url}>{i.html_url}</a>
                            </li>
                        return li;
                    });
                    setData(listItems);
                    setDataLength(listItems.length);
                })
                .catch((err) => {
                        setError(err.message);    
                    });
            }
        
        
    }, [url]);

    if (!data) {
        return (
            <div className="listCard"> Please enter a valid username. </div>
        )
    } else {
        return (
        <div>
            <div className="listCard"> <strong>Username:</strong> { searchTerm } <br></br> <strong>Number of Repos:</strong> {dataLength}</div>
            <ul>{data}</ul>
        </div>
        
      );
    }  

    
}

export default RepoList;

// getWeatherFromCity = () => {
//     const APP_ID = "1cbfb739f9b6cfae7ea0cc16fe258306";
//     let city = this.state.searchCity;
//     fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&q=" + city + "&appid="+ APP_ID)
//     .then(res => res.json())
//     .then(
//         (result) => {
//             this.setState({
//                 isLoaded:true,
//                 items : result, 
//             })
//         }, 
//         (error) => {
//             this.setState({
//                 isLoaded : true,
//                 error
//             })
//         }