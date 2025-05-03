import { useState } from "react"
import Modal from "../Modal";
import styles from './LoginButton.module.scss'
import LoginModalForm from "./LoginModalForm";

const LoginButton = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <button className={styles.login_button}
                onClick={()=> setIsOpen(true)}
            >
                Войти в аккаунт
            </button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                children={<LoginModalForm/>}
            />
        </>
    )
}
export default LoginButton
