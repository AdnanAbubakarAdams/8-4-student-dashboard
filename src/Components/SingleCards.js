import React, { useState } from "react";
import CohortList from "./CohortList";

const SingleCards = ({
  names,
  profilePhoto,
  username,
  dob,
  certifications,
  codewars,
  scores,
  cohort,
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const checkCert = () => {
    if (
      certifications.resume === true &&
      certifications.linkedin === true &&
      certifications.github === true &&
      certifications.mockInterview === true
    ) {
      return <p>On track to Graduate</p>;
    }
  };

  const show = () => {
    if (showMore === true) {
      return (
        <div className="showMore">
          <section className="code">
            <h3>Codewars:</h3>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p>
            <p>Percent of Goal Achieved: {((codewars.current.total / codewars.goal.total) * 100 ).toFixed()}%</p>
          </section>
          <section className="score">
            <h3>Scores</h3>
            <p>Assignments: {(cohort.scores.assignments)*100}%</p>
            <p>Projects: {(cohort.scores.projects)*100}%</p>
            <p>Assessments: {(cohort.scores.assessments)*100}%</p>
          </section>
          <section className="cert">
            <h3>Certifications</h3>
            <p>Resume {certifications.resume ? "✓" : "x"}</p>
            <p>linkedin {certifications.linkedin ? "✓" : "x"}</p>
            <p>Mock Interview {certifications.mockInterview ? "✓" : "x"}</p>
            <p>GitHub {certifications.github ? "✓" : "x"}</p>
          </section>
        </div>
      );
    }
  };
  return (
  <div className="singleCard">
      <img className="pic" src={profilePhoto}></img> 
      <h3>Name: {`${names.preferredName} ${names.middleName} ${names.surname}`}</h3>
      <p>{checkCert()}</p>
      <p>Email: {username}</p>
      <p>Birthday: {dob}</p>
      <br/>
      <button className="showbutt" onClick={handleClick}>Show more...</button>
      <section>{show()}</section>

  </div>
  )
};

export default SingleCards;
