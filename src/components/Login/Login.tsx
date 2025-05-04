import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";


//компонент отображающийся в заголовке приложения
//если пользователь не авторизован отображает кнопку авторизации
//иначе показывает имя пользователя при нажатии переходит в личный кабинет
const Login = () =>{
    const isAuthorised = useSelector((state: RootState) => state.user.isAuthorised);
    const user = useSelector((state: RootState) => state.user.userData);

    if (!isAuthorised) return <LoginButton/>

    return(
        <>
            <Link to={'profile'} 
                style={{
                    fontSize: '18pt',
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer"
                }}      
                tabIndex={1}
                aria-label="Перейти на страницу профиля"
            >
                {user?.firstname}
            </Link>
            
        </>
    )
}

export default Login