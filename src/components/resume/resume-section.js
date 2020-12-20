import React from 'react'
import { ContentHeader } from '../common/content-header'
import { ResumeTimelineItem } from './resume-timeline-item'
import ResumePageStyles from '../../styles/resume-page.module.scss'
import { ResumeSkillItem } from './resume-skill-item'
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const ResumeSection = (props) => {
    const contentBody = props.type === "Skills" ?
        (
            <div>
                {props.content.map((skillGroup, skillGroupIndex) => (
                    <div className={ResumePageStyles.skillsWrapper} key={skillGroupIndex}>
                        <h5 className={ResumePageStyles.skillTitle}>{skillGroup.level}</h5>
                        {skillGroup.skillset.map((skill, skillItemIndex) =>
                            (<ResumeSkillItem item={skill} key={skillItemIndex}/>))}
                    </div>
                ))}
            </div>
        ) : props.type === "Links" ?
        (
            <div className={ResumePageStyles.linksWrapper}>
                <a className={ResumePageStyles.linkItemWrapper}
                    href={`mailto:${props.content.email}`}>
                    <div className={ResumePageStyles.iconWrapper}>
                        <i className="icon envelope"></i>
                    </div>
                </a>
                <OutboundLink className={ResumePageStyles.linkItemWrapper}
                    href={`${props.content.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <div className={ResumePageStyles.iconWrapper}>
                        <i className="icon linkedin"></i>
                    </div>
                </OutboundLink>
                <OutboundLink className={ResumePageStyles.linkItemWrapper}
                    href={`${props.content.github}`} target="_blank" rel="noopener noreferrer">
                    <div className={ResumePageStyles.iconWrapper}>
                        <i className="icon github"></i>
                    </div>
                </OutboundLink>
            </div> 
        ) :
        (
            <div className={ResumePageStyles.contentTimeline}>
                {props.content.map((item, index) => (
                    <ResumeTimelineItem item={item} key={index} type={props.type}/>
                ))}
            </div> 
        )

    return (
        <div className={ResumePageStyles.section}>
            <ContentHeader title={props.type}/>
            {contentBody}
        </div>
    )
}