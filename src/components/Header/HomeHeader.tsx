import styles from "./HomeHeader.module.scss";
import ProductSearch from "./ProductSearch";

const HomeHeader = () => {
    return (
        <>
            <header className={styles.header_home}>
                <section className={styles.header_home_container}>
                    <div className={styles.header_home_search}>
                        <ProductSearch/>
                    </div>
                    
                    <nav>
                        {/* <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul> */}
                    </nav>
                </section>
            </header>
        </>
    )   
}
export default HomeHeader