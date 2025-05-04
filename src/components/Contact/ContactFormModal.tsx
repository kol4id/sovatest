import { FC, useEffect } from 'react'
import styles from './ContactFormModal.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

interface Props{
    onClose: () => void
    onDataChange: (name: string, value: string) => void
    onReady: () => void
}


//Форма обратной связи
const ContactFormModal: FC<Props> = ({onClose, onDataChange, onReady}) =>{
    const user = useSelector((state: RootState) => state.user.userData)

    // при отправке формы открываем форму с заполеной информацией
    // закрываем эту форму 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onReady();
        onClose();
    }

    // обновляем "скрытые данные" если пользователь авторизован
    // или обновляем если форма уже открывалась и пользователь вышел из аккаунта
    useEffect(()=>{
        if(user != undefined){
            onDataChange('id', String(user.id))
            onDataChange('birthday', user.birthday)
        } else {
            onDataChange('id', '')
            onDataChange('birthday', '')
        }
    },[user, onDataChange])

    return (
        <>
            <form 
                onSubmit={(e) => handleSubmit(e)}    
                className={styles.contact_form}
            >
                <h1>Введите данные для связи</h1>
                <div className={styles.contact_form_field}>
                    <label htmlFor="fio" >ФИО</label>
                    <input type="text" id="fio" name="fio" required placeholder="Введите ФИО"
                        onChange={e => onDataChange('FIO', e.target.value)}
                    />
                </div>
                <div className={styles.contact_form_field}>
                    <label htmlFor="phone" >Телефон</label>
                    <input type='text' id="phone" name="phone" required placeholder="Введите телефон"
                        onChange={e => onDataChange('phone', e.target.value)}
                    />
                </div>
                <div className={styles.contact_form_field}>
                    <label htmlFor="email" >Email</label>
                    <input type='email' id="email" name="email" required placeholder="Введите Email"
                        onChange={e => onDataChange('email', e.target.value)}
                    />
                </div>
                <div className={styles.contact_form_field}>
                    <label htmlFor="date" >Дата</label>
                    <input type='date' id="date" name="date" required defaultValue={new Date().toISOString().split('T')[0]}
                        onChange={e => onDataChange('date', e.target.value)}
                    />
                </div>
                <div className={styles.contact_form_field}>
                    <div className={styles.contact_form_field_textarea}>
                        <label htmlFor="date" >Коментарий</label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows={5}
                            placeholder="Введите ваш комментарий..."
                            onChange={e => onDataChange('comment', e.target.value)}
                            required
                        />
                    </div>
                </div>
                {/* скрытые данные */}
                {user && (
                    <>
                        <input type="hidden" name="userId" value={user.id} />
                        <input type="hidden" name="birthdate" value={user.birthday} />
                    </>
                )}
                <section className={styles.contact_form_action}>
                    <button 
                        type='button'
                        onClick={onClose}
                        className={styles.contact_form_action_close}
                        title="Закрыть форму"
                        aria-label="Закрыть форму"
                    >
                        Закрыть
                    </button>
                    <button
                        type='submit'
                        title="Отправить форму"
                        aria-label="Отправить форму"
                    >
                        Отправить
                    </button>
                </section>
            </form>
        </>
    )
}
export default ContactFormModal