import { FC } from "react";
import styles from "./Pagination.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { setCurrentPage } from "../../store/productSearchSlice";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

/**
 * Компонент навигации по страницам, при навигации
 * меняет глобальное состояние currentPage
 * 
 * @param totalPages - всего страниц
 * @param currentPage - текущая страница
 * @returns компонент с двумя кнопками для навигации
 */
const Pagination: FC<PaginationProps> = ({ totalPages, currentPage}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlePageChange = (pageModifier: number) => {
        dispatch(setCurrentPage(currentPage + pageModifier));
        navigate(`/products/${currentPage + pageModifier}`);
    }

    if (totalPages <= 1) return null;
     
    return(
        <>
            <nav aria-label="Page navigation" className={styles.pagination_container}>
                <button 
                    className={styles.page_button}
                    onClick={() => handlePageChange(-1)}
                    disabled={currentPage === 1}
                    style={{marginRight: '10px'}}
                    title="Перейти на предыдущую страницу"
                    aria-label="Перейти на предыдущую страницу"
                >Previous</button>
                <button
                    className={styles.page_button}
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === totalPages}
                    title="Перейти на следующую страницу"
                    aria-label="Перейти на следующую страницу"
                >Next</button>
            </nav>
        </>
    )
}

export default Pagination;