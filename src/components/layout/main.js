import React from 'react'
import ResumePage from '../resume/resume-page'
import AboutMePage from '../about-me/about-me-page'
import ContactPage from '../contact/contact-page'
import { PageNotFound } from '../error-pages/404'

function MainView(props) {
  function showPage() {
    switch (props.page) {
      case 'Resume':
        return <ResumePage/>
      case 'AboutMe':
        return <AboutMePage/>
      case 'Contact':
        return <ContactPage/>
      default:
        return <PageNotFound/>
    }
  }
    
  return (
      <div className="mainPanel">
          <div className="page">
              <div className="pageTopLeftBorder"></div>
              <div className={"ui grid pageGrid"}>
                  {showPage()}
              </div>
          </div>
      </div>
  )
}

export default MainView