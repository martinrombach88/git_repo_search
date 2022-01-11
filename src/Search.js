import { useState } from 'react';
import RepoList from './RepoList';
import Footer from './Footer';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
            <div className="App">
            {/* <img className="githubIcon" src={require("githubblk.png")} alt="github" /> */}
            <h1>Git Hub Repo Search</h1>
            <input className="search"
            type="text" 
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
            <RepoList searchTerm={searchTerm}/>
            <Footer searchTerm={searchTerm} />
            </div>

            
    )
}

export default Search;