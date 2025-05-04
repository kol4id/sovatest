import { useState } from "react"
import Modal from "../Modal";
import styles from './LoginButton.module.scss'
import LoginModalForm from "./LoginModalForm";

// Компонент для вызова модальной формы
const LoginButton = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <button className={styles.login_button}
                onClick={()=> setIsOpen(true)}
            >
                Войти в аккаунт
            </button>

            {/* вызов происходит путем простой установки isOpen в true 
                закрытие формы через установку isOpen в false
            */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                children={<LoginModalForm/>}
            />
        </>
    )
}
export default LoginButton
