import React from 'react'
import { ProfileImage } from '../common/profile-image'
import { useStaticQuery, graphql } from "gatsby"

export const SideBarHeader = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div>
            <ProfileImage/>
            <div className="sidebarHeaderWrapper">
                <h2 className="sidebarHeaderTitle">{data.site.siteMetadata.author}</h2>
            </div>
        </div>
    )
}
