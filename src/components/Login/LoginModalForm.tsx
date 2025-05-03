import { useAppDispatch } from '../../store/store';
import { fetchUser, setUserAuthorised } from '../../store/userSlice';
import styles from './LoginModal.module.scss'

const LoginModalForm = () =>{
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await dispatch(fetchUser());
        localStorage.setItem('isAuthorised', 'true');
        dispatch(setUserAuthorised(true));
    }

    return(
        <>
            <main className={styles.login_section}>
                <h1>Авторизация</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label htmlFor="email" style={{marginRight: '16px'}}>Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button>Войти</button>
                </form>
            </main>
        </>
    )
}

export default LoginModalForm