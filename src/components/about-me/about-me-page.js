import React from 'react'
import { PageHeader } from '../common/page-header'
import AboutMePageStyles from '../../styles/about-me-page.module.scss'

import { useStaticQuery, graphql } from "gatsby"

const AboutMePage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    about
                }
            }
        }
    `)

    return (
        <div className={`${AboutMePageStyles.main} ui grid`}>
            <PageHeader title="About Me" description="Software Engineer"/>
            <div className="row">
                <div className="two wide column computer only"></div>
                <div className="twelve wide computer sixteen wide column">
                    {data.site.siteMetadata.about.map((para, _) => (<p>{para}</p>))}
                </div>
                <div className="two wide column computer only"></div>
            </div>
        </div>
        
    )
}

export default AboutMePage