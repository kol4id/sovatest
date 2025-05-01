import { FC } from "react";
import styles from "./Pagination.module.scss";
import { useNavigate } from "react-router-dom";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const navigate = useNavigate();

    const handlePageChange = (pageModifier: number) => {
        const newPage = currentPage + pageModifier;
        onPageChange(newPage);
        navigate(`/products/${newPage}`);  
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
                >Previous</button>
                <button
                    className={styles.page_button}
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === totalPages}
                >Next</button>
            </nav>
        </>
    )
}

export default Pagination;