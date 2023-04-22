import { NavLink } from "react-router-dom";
import { useMails } from "../contexts/MailContext";

const Sent = () =>{
    const {sentEmails} = useMails();
    return(
        <>
            <h1>Sent Page</h1>
            <ul>
                {
                    sentEmails.map((email)=>{
                        const {id, to, subject, message} = email;
                        return(
                            <li key={id}><NavLink to={`/details/${id}`}>{subject}</NavLink></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Sent;