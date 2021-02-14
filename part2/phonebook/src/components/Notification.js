import React from 'react'
import '../index.css';

function Notification({notificacion}) {
    if(notificacion === null) {return null}
    return (
        <div className={notificacion?.type}>
            {notificacion?.message}
        </div>
    )
}

export const NotificationType = {
    error: 'error',
    success: 'success'
}

export default Notification
