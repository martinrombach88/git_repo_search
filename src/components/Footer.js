

const Footer = ({searchTerm}) => {
    const date = new Date().getFullYear();

    if (searchTerm.length > 4)
        return ( 
            
                <p className="footerDate">{searchTerm}'s repos for {date}</p>

        )
    else {
        return (
            <div></div>
        )
        
    }
}
 
export default Footer;