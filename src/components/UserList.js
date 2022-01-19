import { useEffect, useState} from "react";
import UserProfile from "../components/UserProfile"

const UserList = ({searchTerm}) => {
    let url = null;
    if (searchTerm !== '' || searchTerm == null) {
        url = `https://api.github.com/users/${ searchTerm }`;
    } else {
        url = null;
    }
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        if(url != null) {
            fetch(url)
                .then(res => {
                    if (!res.ok) { 
                        throw Error('Username not found, please try another.');
                    } 
                    return res.json();
                    })
                .then(data => { 
                    console.log(data);
                    if (data == null) {
                        throw Error('Username not found, try another.');
                    } 
                    setUserInfo(data);
                    //When dealing with a single object that you don't need to map
                    //set the object directly using Use State.
                    //setVariable(data) retrieves the object directly in the state.
            })
            .catch((err) => {
                setError(err.message);    
            });
 
        }
        
    }, [url])
    
    return ( 
        <div>
            {/* Then use an 'if exists then' structure below to build your stuff. */}
            { userInfo && <UserProfile userInfo= {userInfo} />}
            
        </div>
    );

}
export default UserList;