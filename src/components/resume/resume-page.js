import React from 'react'
import ResumePageStyles from '../../styles/resume-page.module.scss'
import { PageHeader } from '../common/page-header'
import { ResumeSection } from './resume-section'

import { useStaticQuery, graphql } from "gatsby"

const ResumePage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    experience {
                        role
                        company
                        location
                        period
                        description
                    }
                    education {
                        degree
                        school
                        location
                        period
                    }
                    skills {
                        level
                        skillset
                    }
                    links {
                        email
                        github
                        linkedin
                        resume
                    }
                }
            }
        }
    `)

    return (
        <div className={`${ResumePageStyles.main} ui grid`}>
            <PageHeader title="Resume" description="Overview"/>
            <div className="row">
                <div className="sixteen wide mobile ten wide computer column">
                    <ResumeSection type="Experience" content={data.site.siteMetadata.experience}/>
                </div>
                <div className="sixteen wide mobile six wide computer column">
                    <ResumeSection type="Education" content={data.site.siteMetadata.education}/>
                    <ResumeSection type="Skills" content={data.site.siteMetadata.skills}/>
                    <ResumeSection type="Links" content={data.site.siteMetadata.links}/>
                    <div className={ResumePageStyles.downloadButtonWrapper}>
                        <a href={data.site.siteMetadata.links.resume} target="_blank" rel="noopener noreferrer"
                        className={ResumePageStyles.downloadButton}>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ResumePage