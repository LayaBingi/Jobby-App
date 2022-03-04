// import {Link} from 'react-router-dom'
// import Header from '../Header'
// import './index.css'

// const Home = props => {
//   const onRedirectToJobs = () => {
//     const {history} = props
//     history.replace('/jobs')
//   }

//   return (
//     <>
//       <Header />
//       <div className="home-container">
//         <h1 className="heading">
//           Find The Job That <br />
//           Fits Your Life
//         </h1>
//         <p className="descrptn">
//           Millions of people are searching for jobs, salary <br />
//           information, company reviews. Find the job that fits your <br />
//           abilities and potential.
//         </p>
//         <Link className="text-decoration" to="/jobs">
//           <button className="button" type="button" onClick={onRedirectToJobs}>
//             Find Jobs
//           </button>
//         </Link>
//       </div>
//     </>
//   )
// }

// export default Home

import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary <br />
          information, company reviews. Find the job that fits your
          <br /> abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button
            className="home-jobs-button"
            type="button"
            onClick={onRedirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
