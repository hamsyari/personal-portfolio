import React from 'react'
import ResumePageStyles from '../../styles/resume-page.module.scss'

export const ResumeSkillItem = (props) => {
    return (
        <div className={ResumePageStyles.skillItem}>{props.item}</div>
    )
}