import React from 'react'
import ResumePageStyles from '../../styles/resume-page.module.scss'

export const ResumeTimelineItem = (props) => {
    const isExperienceType = props.type === "Experience"

    return (
        <div className={ResumePageStyles.timelineItemWrapper}>
            <h5 className={ResumePageStyles.timelineItemDate}>{props.item.period}</h5>
            <h4 className={ResumePageStyles.timelineItemTitle}>{isExperienceType ? props.item.role : props.item.degree}</h4>
            <span className={ResumePageStyles.timelineItemSubtitle}>{isExperienceType ? props.item.company : props.item.school}</span>
            <span className={ResumePageStyles.timelineItemSubtitle}>{props.item.location}</span>
            {isExperienceType &&
                <ul className={ResumePageStyles.timelineItemDescriptionWrapper}>
                    {props.item.description.map((desc, index) => 
                        <li className={ResumePageStyles.timelineItemDescription} key={index}>{desc}</li>)}
                </ul>
            }
        </div>
    )
}