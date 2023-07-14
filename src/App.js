import React, { useState } from "react";
// import React, { Component } from "react";
import General from "./components/general";
import Education from "./components/education";
import Work from "./components/work";
import CvDisplay from "./components/cvDisplay";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNum: "",
    address: "",
    photo:null
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudyStart: "",
    dateOfStudyEnd: "",
  });

  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    positionTitle: "",
    jobTasks: "",
    dateStarted: "",
    dateEnded: "",
  });

  const handleGeneralInfoChange = (updatedInfo) => {
    setGeneralInfo(updatedInfo);
  };

  const handleEducationInfoChange = (updatedInfo) => {
    setEducationInfo(updatedInfo);
  };

  const handleWorkInfoChange = (updatedInfo) => {
    setWorkInfo(updatedInfo);
  };

  return (
    <div className="App">
      
      <div className="formArea">
        <General onChange={handleGeneralInfoChange} />
        <Work onChange={handleWorkInfoChange} />
        <Education onChange={handleEducationInfoChange} />
        
      </div>
      <div className="renderArea">
        <CvDisplay
          generalInfo={generalInfo}
          workInfo={workInfo}
          educationInfo={educationInfo}
          
        />{" "}
       
      </div>
    </div>
  );
}

export default App;
