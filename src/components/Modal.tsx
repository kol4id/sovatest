import { FC, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from './Modal.module.scss'

interface IProps{
    isOpen: boolean,
    onClose?: () =>void,
    position?: {x: number, y: number},
    overlayClickClose?: boolean,
    children: React.ReactNode;
}


//мой шаблон реализации модального окна
//возможность настройки позиции, закрытии при нажатии на оверлей
//блокировка скролла страницы
const Modal: FC<IProps> = ({isOpen, onClose, position, overlayClickClose = true, children}) => {
    const [portalElement] = useState<HTMLElement | null>(document.getElementById('portal'))
    
    //настройка кастомной позиции, по умолчанию по центру
    const modalStyle = {
        top: position?.y ?? '',
        left: position?.x ?? '',
    };

    // обработка закрытия окна если нажать за его пределы
    const handleContext = (event: React.MouseEvent) =>{
        event.preventDefault();
        if (overlayClickClose) onClose?.()
    }

    // блокировка скролла страницы 
    const PreventWheel = useCallback((event: WheelEvent) => {
        if (isOpen){
            event.preventDefault();
            event.stopPropagation();
        }
    }, [isOpen])

    useEffect(()=>{
        document.addEventListener('wheel', PreventWheel, {passive: false})
        return() =>{
            document.removeEventListener('wheel', PreventWheel)
        }
    }, [isOpen, PreventWheel])

    return (
        <>
        {isOpen && ReactDOM.createPortal(
            <div className={styles.modal_overlay} onContextMenu={e => handleContext(e)} onClick={overlayClickClose ? onClose : ()=>{}}>
                <div className={styles.modal_content} style={modalStyle} onClick={(e) => e.stopPropagation()}>
                {children}
                </div>
            </div>,
            portalElement || document.body
        )}
        </>
    );
}

export default Modal