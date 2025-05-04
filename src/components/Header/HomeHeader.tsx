import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import styles from "./HomeHeader.module.scss";


// заголовок главной страницы с товарами
// возможно, рефакторинг до глобального заголовка приложения
const HomeHeader = () => {
    return (
        <>
            <header className={styles.header_home}>
                <section className={styles.header_home_container}>

                    <div>
                        <Contact/>
                    </div>
                    <div className={styles.header_home_login}>
                        <Login/>
                    </div>
                    
                </section>
            </header>
        </>
    )   
}
export default HomeHeader