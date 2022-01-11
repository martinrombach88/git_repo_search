

const Footer = ({searchTerm}) => {
    const date = new Date().getFullYear();

    if (searchTerm.length > 4)
        return ( 
            
            <div className="footer">
                <p>{searchTerm}</p>
                <p className="footerDate">Repos for {date}</p>
            </div>

        )
    else {
        return (
            <div></div>
        )
        
    }
}
 
export default Footer;