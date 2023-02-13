import React from "react"

const date = new Date().getFullYear();

const Footer=()=>{
    return(
        <footer>
            <p>Copyright © Akshay Kumar Kanugula {date}</p>
        </footer>
    )
}

export default Footer