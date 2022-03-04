import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    // eslint-disable-next-line no-unused-vars
    id,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="similar-job-li-container">
      <div className="job-title-container">
        <img
          className="company-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="job-rating-container">
          <h1 className="title-heading">{title}</h1>
          <div className="star-rating-container">
            <AiFillStar className="ai-star-icon" />
            <p className="rating-num">{rating}</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="description-job-heading">Description</h1>
        <p className="description-job-paragraph">{jobDescription}</p>
      </div>
      <div className="job-details-container">
        <div className="location-icon-container">
          <MdLocationOn className="job-location-icon" />
          <p className="job-location">{location}</p>

          <BsBriefcaseFill className="job-location-icon" />
          <p className="employment-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
