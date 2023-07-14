import React from "react";
import blank from "./blankprofilepic.png";
const CvDisplay = ({ generalInfo, educationInfo, workInfo }) => {
  const { fullName, about, profilePic, email, phoneNum, address } = generalInfo;
  const { schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyEnd } =
    educationInfo;
  const { companyName, positionTitle, jobTasks, dateStarted, dateEnded } =
    workInfo;
  console.log(profilePic);
  return (
    <div>
      <div className="cvHead">
        <h1>{fullName}</h1>
      </div>
      <div className="mainDivider">
        <div className="main">
          <div className="aboutMe">
            <h2 className="infoTitles">About Me -</h2>
            <div className="aboutText">
              <p>{about}</p>
            </div>
          </div>
          <div className="workSec">
            <h2 className="infoTitles">Work Experience - </h2>
            <div className="workInfo">
              <div className="workEduDates">
                <h4>{dateStarted}</h4>
                <p>-</p>
                <h4>{dateEnded}</h4>
                <div className="compPosJob">
                  {" "}
                  <div className="posTit">
                    <h3>{companyName + ": "}</h3>
                    <h3>{positionTitle}</h3>
                  </div>
                  <div className="jobTasks">
                    <p>{jobTasks}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="educationSec">
            <h2 className="infoTitles">Education - </h2>
            <div className="eduInfo">
              {" "}
              <div className="workEduDates">
                <h4>{dateOfStudyStart}</h4>
                <p>-</p>
                <h4>{dateOfStudyEnd}</h4>
              </div>
              <div className="schTitle">
                {" "}
                <h3>{schoolName}</h3>
                <p>{titleOfStudy}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="personalInfo">
            <img className="profileImg" src={profilePic || blank} alt="photo" />
            <h3>Personal Info </h3>
            <h4 className="pInfoSec">Address -</h4>
            <p>{address}</p>
            <h4 className="pInfoSec">Email - </h4>
            <p>{email}</p>
            <h4 className="pInfoSec">Phone Number - </h4>
            <p>{phoneNum}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvDisplay;
