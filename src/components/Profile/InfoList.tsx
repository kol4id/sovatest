import { FC } from "react"
import { User } from "../../store/userSlice"

import styles from './InfoList.module.scss'
import InfoItem from "./InfoItem"
import MakeList from "../../utils/MakeList"

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
    const userInfo = MakeList(user, excludedKeys);

    return(
        <>
            <article className={styles.list_info}>
                <h1>{user?.firstname + ' ' + user?.lastname}</h1>
                <ul className={styles.list_info_list}>
                    {userInfo.map(({key, value})=> (
                        <InfoItem key={key} label={key} value={String(value)} />
                    ))}
                </ul>
            </article>
        </>
    )
}

export default InfoList