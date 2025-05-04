import { FC } from "react"
import MakeList from "../../utils/MakeList"
import { ContactData } from "./ContactButton"
import styles from './FormInfo.module.scss'

interface Props{
    formData: ContactData
}

//Компонент с перечнем информации из формы обратной связи
const FormInfo: FC<Props> = ({formData}) =>{
    const exclude = new Set(['comment']);
    const data = MakeList(formData, exclude);

    return(
        <>
            <ul className={styles.form_list}>
                {data.map(({key, value}) =>(
                    <li key={key} className={styles.form_list_item}>
                        <span className={styles.form_list_label}>{key + ':'}</span>
                        <span className={styles.form_list_value}>{value}</span>
                    </li>
                ))}
                <li className={styles.form_list_item}>
                    <span className={styles.form_list_label}>{'comment' + ':'}</span>
                    <span className={styles.form_list_value}>{formData.comment}</span>
                </li>
            </ul>
        </>
    )
}
export default FormInfo