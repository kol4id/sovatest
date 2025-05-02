import { FC } from "react";
import styles from "./Pagination.module.scss";
import { Link } from "react-router-dom";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {

    const handlePageChange = (pageModifier: number) => {
        onPageChange(currentPage + pageModifier);
    }

    if (totalPages <= 1) return null;
     
    return(
        <>
            <nav aria-label="Page navigation" className={styles.pagination_container}>
                <Link to={`/products/${currentPage - 1}`} style={{ all: 'unset' }}>
                    <button 
                        className={styles.page_button}
                        onClick={() => handlePageChange(-1)}
                        disabled={currentPage === 1}
                        style={{marginRight: '10px'}}
                    >Previous</button>
                </Link>
                <Link to={`/products/${currentPage + 1}`} style={{ all: 'unset' }}>
                    <button
                        className={styles.page_button}
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === totalPages}
                    >Next</button>
                </Link>
            </nav>
        </>
    )
}

export default Pagination;