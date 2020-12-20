module.exports = {
  siteMetadata: {
    siteUrl: `https://www.hamsyari.net`,
    title: `Hamsyari`,
    description: `Hi, I'm Hamsyari. Here's my portfolio.`,
    author: `Hamsyari`,
    role: `Software Engineer`,
    links: {
      email: `hamsyari@outlook.com`,
      linkedin: `https://linkedin.com/in/hamsyari`,
      github: `https://github.com/hamsyari`,
      resume: `https://drive.google.com/file/d/1RIKqo8MSy8ePIGn3Xusi1L3wHByhUNOi/view?usp=sharing`
    },
    about: [
      `I am a software engineer, with years of experience working in startups and large organisations from a diverse range of industries. Most of my work involves interacting with scalable, distributed systems and also designing and integrating API services. I love building new products and features, especially those that are directly impacting customers and end-users.`,
      `I mostly do backend development during my day-to-day work but I am also interested in learning different aspects of software development during my free time. Fueled by my determination of constant personal growth, I consider myself as a "forever student" who is eager to not only build on my academic foundations in computer science but also to gain new perspectives which gives my life meaning and develop myself as an individual.`
    ],
    experience: [
      {
        role: `Software Engineer`,
        company: `Agoda`,
        location: `Singapore, SG`,
        period: `Jun 2019 - Present`,
        description: [
          `Integrated partner APIs, which increased overall company-wide hotel bookings by 2100 per day`,
          `Implemented service that utilized internal machine learning algorithms, improving cache hit ratio of
          hotel searches by 10%`,
          `Developed functionality of hotel booking with non-fast confirmations, allowing customers to book at
          cheaper rates of up to 10%`,
          `Utilized Zookeeper in numerous projects to enforce synchronization within distributed systems`
        ]
      },
      {
        role: `Software Engineering Intern`,
        company: `EcoFactor`,
        location: `Redwood City, CA`,
        period: `Aug 2017 - Jul 2018`,
        description: [
          `Spearheaded end-to-end development, testing and release of pilot Android and iOS applications,
          through Cordova, allowing homeowners to control their thermostats through their smartphones`,
          `Implemented geofencing feature that automatically turns off thermostats upon leaving the premises,
          increasing monthly energy savings of app users by 5%`,
          `Designed and developed new API, with OAuth2 authentication, to integrate partner services`,
          `Worked on front-end development, using ReactJS, for customer-facing web platforms`
        ]
      },
      {
        role: `Software Engineering Intern`,
        company: `GovTech`,
        location: `Singapore, SG`,
        period: `May 2017 - Jul 2017`,
        description: [
          `Built web application, using .NET framework, to improve residents’ access to government policies`,
          `Integrated communication APIs to introduce OTP verification for accessing government portals`,
          `Contributed to 25% of stored procedures in the department to provide support for critical functions`,
          `Wrote reusable unit tests to ensure code quality and identify potential bugs`
        ]
      },
      {
        role: `Software Engineering Intern`,
        company: `Relevant Mobile`,
        location: `New York, NY`,
        period: `Aug 2012 - Oct 2012`,
        description: [
          `Built business-facing web application, allowing chain restaurants to manage their loyalty programs`,
          `Worked with Amazon’s Simple Email Service to manage sending of email newsletters to
          approximately 1200 customers`
        ]
      }
    ],
    education: [
      {
        degree: `B.Sc, Computer Science`,
        school: `National University of Singapore`,
        location: `Singapore, SG`,
        period: `Aug 2015 - May 2019`
      },
      {
        degree: `Diploma, Information Technology`,
        school: `Singapore Polytechnic`,
        location: `Singapore, SG`,
        period: `Apr 2010 - Feb 2013`
      }
    ],
    skills: [
      {
        level: `Proficient`,
        skillset: [`Java`, `Scala`, `SQL`]
      },
      {
        level: `Familiar With`,
        skillset: [`Python`, `C#`, `JavaScript`, `HTML`, `CSS`]
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-8TKKJFQ4BJ",
        head: true,
        anonymize: true
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "${__dirname}/src/styles/global";`,
      }
    }
  ],
}
