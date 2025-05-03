import { FC, JSX } from "react"
import { User } from "../../store/userSlice"

import styles from './InfoList.module.scss'
import InfoItem from "./InfoItem"

interface ListProps{
    user: User
}

/**
 * Компонент создает из данных пользователя список параметров
 * @param user объект пользователя 
 */
const InfoList: FC<ListProps> = ({user}) =>{
    const excludedKeys = new Set(['image', 'id']);

    // рекурсивный проход по объекту пользователя
    // разварачиваем все вложенные объекты
    // возвращаем какждый параметр объекта как 
    // <InfoItem key={key} label={key} value={String(value)} />
    const makeList = (obj: any): JSX.Element[] => {
        return Object.entries(obj).flatMap(([key, value]) => {
            if (excludedKeys.has(key)) return [];
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                return makeList(value);
            }
            return <InfoItem key={key} label={key} value={String(value)} />;
        });
    };

    return(
        <>
            <article className={styles.list_info}>
                <h1>{user?.firstname + ' ' + user?.lastname}</h1>
                <ul className={styles.list_info_list}>
                    {makeList(user)}
                </ul>
            </article>
        </>
    )
}

export default InfoList