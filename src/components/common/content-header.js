import React from 'react'
import CommonStyles from "../../styles/common.module.scss"

export function ContentHeader(props) {
    return (
        <div className={CommonStyles.contentHeaderWrapper}>
            <h3 className={CommonStyles.contentHeaderTitle}>{props.title}</h3>
        </div>
    )
}