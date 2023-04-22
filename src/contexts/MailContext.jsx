import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakefetch";

export const MailContext = createContext();

export const MailProvider = ({children}) =>{

    const [emails, setEmails] = useState([]);
    const [sentEmails, setSentEmails] = useState([]);

    const getData = async() =>{
        try {
            const response = await fakeFetch('https://example.com/api/allemails');
            if(response.status === 200){
                setEmails(response.data.emails);
                setSentEmails(response.data.sentEmails);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    const handleReadBtn = (emailToUpdate) =>{
        setEmails((emails)=> emails.map((email)=> email.id===emailToUpdate.id ? {...email, read: true} : email))
    }

    return(
        <MailContext.Provider value={{emails, sentEmails, handleReadBtn}}>
            {children}
        </MailContext.Provider>
    )
}

export const useMails = () => useContext(MailContext);