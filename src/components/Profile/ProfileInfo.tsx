import { useSelector } from 'react-redux'
import styles from './ProfileInfo.module.scss'
import { RootState, useAppDispatch } from '../../store/store'
import ProductPlaceholder from '../../assets/ProductPlaceholder.jpg'
import { useState } from 'react'
import LoadingSpinner from '../Spinner/LoadingSpiner'
import InfoList from './InfoList'
import { useNavigate } from 'react-router-dom'
import { setUserAuthorised, setUserData } from '../../store/userSlice'

//Компонент отображает полные данные о пользователе
const ProfileInfo = () =>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const user = useSelector((state: RootState) => state.user.userData);
    const isLoading = useSelector((state: RootState) => state.user.isLoading);
    const [profileImg, setProfileImg] = useState(user?.image ?? ProductPlaceholder)

    if (isLoading || user == undefined) return <LoadingSpinner/>

    // очищаем все связанные с пользователем данные
    // и чистим все значения указывающие на то
    // что пользователь авторизован 
    const handleClick = () =>{
        localStorage.removeItem('isAuthorised');
        dispatch(setUserAuthorised(false));
        dispatch(setUserData(undefined));
        navigate('/')
    }

    return(
        <>
            <main className={styles.profile_main}>
                <section className={styles.profile_main_section}>
                    <article className={styles.profile_main_picture}>
                        <img 
                            src={profileImg}
                            loading="lazy"
                            onError={() => setProfileImg(ProductPlaceholder)}
                        />
                    </article>
                    <InfoList user={user}/>
                </section>
                <section className={styles.profile_main_exit}>
                    <button
                        onClick={handleClick}
                        title="Выйти из аккаунта"
                        aria-label="Выйти из аккаунта"
                    >
                        Выйти из аккаунта
                    </button>
                </section>
            </main>
        </>
    )
}
export default ProfileInfo