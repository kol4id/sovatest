import { useState } from "react"
import Modal from "../Modal";

import styles from './ContactButton.module.scss'
import ContactFormModal from "./ContactFormModal";
import FormInfo from "./FormInfo";

export interface ContactData{
    FIO: string,
    phone: string,
    email: string,
    date: string,
    comment: string,
    id?: number,
    birthday?: string
}

const ContactButton = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [contactData, setContactData] = useState<ContactData>({
        FIO: '',
        phone: '',
        email: '',
        date: new Date().toISOString().split('T')[0],
        comment: ''
    });

    const handleDataChange = (name: string, value: string) =>{
        setContactData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return(
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={styles.contact_button}
                title="Связаться с нами"
                aria-label="Связаться с нами"
            >
                Связаться
            </button>
            <Modal
                isOpen={isOpen}
                onClose={()=>setIsOpen(false)}
                overlayClickClose={false}
                children={
                    <ContactFormModal 
                        onClose={()=>setIsOpen(false)} 
                        onDataChange={handleDataChange}
                        onReady={()=>setIsInfoOpen(true)}
                    />
                }
            />
            <Modal
                isOpen={isInfoOpen}
                onClose={()=>setIsInfoOpen(false)}
                children={<FormInfo formData={contactData}/>}
            />
        </>
    )
}

export default ContactButton