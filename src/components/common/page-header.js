import React from 'react'
import CommonStyles from "../../styles/common.module.scss"

export const PageHeader = (props) => {
    return (
        <div className={`row sixteen wide column pageHeaderWrapper`}>
            <div>
                <h2 className={CommonStyles.pageHeaderTitle}>{props.title}</h2>
                <h5 className={CommonStyles.pageHeaderDescription}>{props.description}</h5>                                
            </div>
        </div>
    )
}