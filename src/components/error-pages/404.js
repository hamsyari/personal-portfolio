import { Link } from 'gatsby'
import React from 'react'
import PageNotFoundStyles from '../../styles/page-not-found.module.scss'
import { PageHeader } from '../common/page-header'

export const PageNotFound = () => {
    return (
        <div className={`${PageNotFoundStyles.main} ui grid`}>
            <PageHeader title="Oops!" description="Error 404"/>
            <div className="row">
                <div className="two wide column computer only"></div>
                <div className="twelve wide computer sixteen wide column">
                    <div className={PageNotFoundStyles.content}>
                        Sorry, the page you're looking for cannot be found.
                    </div>
                    <div className={PageNotFoundStyles.homepageButtonWrapper}>
                        <Link to="/" className={PageNotFoundStyles.homepageButton}>Back to homepage</Link>
                    </div>
                </div>
                <div className="two wide column computer only"></div>
            </div>
        </div>
    )
}