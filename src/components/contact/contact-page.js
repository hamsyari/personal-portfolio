import React from 'react'
import { PageHeader } from '../common/page-header'
import ContactPageStyles from '../../styles/contact-page.module.scss'
import { ContentHeader } from '../common/content-header'

import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    links {
                        email
                        linkedin
                    }
                }
            }
        }
    `)

    return (
        <div className={`${ContactPageStyles.main} ui grid`}>
            <PageHeader title="Contact" description="Get in touch"/>
            <div className="row">
                <div className="sixteen wide column">
                    <ContentHeader title="Contact"/>
                    <div>
                        Want to get in touch? I'd love to hear from you. Here's how you can reach me:
                    </div>
                    <div className="row ui stackable grid">
                        <div className="two wide column computer only"></div>
                        <div className={`${ContactPageStyles.contactItemGrid} six wide column`}>
                            <a className={ContactPageStyles.contactLinkItemWrapper}
                              href={`mailto:${data.site.siteMetadata.links.email}`}>
                                <div className={ContactPageStyles.iconWrapper}>
                                    <i className="icon envelope"></i>
                                </div>
                                <h3 className={ContactPageStyles.contactItem}>Email</h3>
                            </a>
                        </div>
                        <div className={`${ContactPageStyles.contactItemGrid} six wide column`}>
                            <OutboundLink className={ContactPageStyles.contactLinkItemWrapper}
                              href={`${data.site.siteMetadata.links.linkedin}`} target="_blank" rel="noopener noreferrer">
                                <div className={ContactPageStyles.iconWrapper}>
                                    <i className="icon linkedin"></i>
                                </div>
                                <h3 className={ContactPageStyles.contactItem}>LinkedIn</h3>
                            </OutboundLink>
                        </div>
                        <div className="two wide column computer only"></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ContactPage