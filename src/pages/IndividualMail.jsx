import { useParams } from "react-router-dom";
import { useMails } from "../contexts/MailContext";

const IndividualMail = () =>{
    const {mailId} = useParams();
    const {emails, sentEmails} = useMails();

    const findEmail = emails.find(({id})=> id === +(mailId)) ?? {};
    const {sender, subject, message} = findEmail;

    const findSentEmail = sentEmails.find(({id})=> id === +(mailId)) ?? {};
    const {to, subject: sentSubject, message: sentMessage} = findSentEmail;

    return(
        <>
            {
                Object.keys(findEmail).length > 0 &&
                    <>
                        <h1>{subject}</h1>
                        <p>From: {sender}</p>
                        <p>Message: {message}</p>
                    </>
            }
            {
                Object.keys(findSentEmail).length > 0 &&
                    <>
                        <h1>{sentSubject}</h1>
                        <p>To: {to}</p>
                        <p>Message: {sentMessage}</p>
                    </>
            }
        </>
    )
}

export default IndividualMail;