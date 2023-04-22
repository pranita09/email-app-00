import { useMails } from "../contexts/MailContext";
import { NavLink } from "react-router-dom";

const Inbox = () =>{
    const {emails, handleReadBtn} = useMails();

    const readMailsCount = emails.reduce((acc, {read})=> read ? acc+1 : acc,0)

    return(
        <>
            <h1>Inbox Page</h1>
            <p>Unread Emails: {emails.length - readMailsCount}</p>
            <p>Read Emails: {readMailsCount}</p>
            <ul>
                {
                    emails.map((email)=>{
                        const {id, sender, subject, message, read} = email;
                        return(
                            <li key={id}>
                                <NavLink to={`/details/${id}`}>{subject}</NavLink>
                                { !read && (<button onClick={()=>handleReadBtn(email)}>Mark as read</button>)}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Inbox;