import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HomePageStyles from '../../styles/home-page.module.scss'

export const HomePage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    role
                }
            }
        }
    `)

    return (
        <div className={HomePageStyles.main}>
            <h1 className={HomePageStyles.title}>{data.site.siteMetadata.author}</h1>
            <h4 className={HomePageStyles.role}>{data.site.siteMetadata.role}</h4>
        </div>
    )
}