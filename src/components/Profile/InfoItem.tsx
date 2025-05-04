import { FC } from "react"
import styles from './InfoItem.module.scss'

interface Props{
    label: string
    value: string
}

/**
 * Компонент который представляет собой элемент списка
 * для отображения данных Ключ .... Значение
 * @param label - ключ параметра
 * @param value - значение параметра 
 */
const InfoItem: FC<Props> = ({label, value}) =>{
    return(
        <>
            <li className={styles.profile_item}>
                <span className={styles.profile_item_label}>{label}</span>
                <span className={styles.profile_item_dots}></span>
                <span className={styles.profile_item_value}>{value}</span>
            </li>
        </>
    )
}

export default InfoItem