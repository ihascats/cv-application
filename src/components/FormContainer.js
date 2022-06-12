import React, { Component } from 'react';
import InputFields from './InputFields';
import './componentCss/FormContainer.css';

class FormContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      education: ['Education'],
      jobExperience: ['Job Experience'],
    };
    this.edu = 0;
    this.job = 0;

    this.newEdu = this.newEdu.bind(this);
    this.newJob = this.newJob.bind(this);
  }
  generateEducation() {
    let education = this.state.education.map((edu, index) => {
      if (index === 0) {
        return (
          <div key={`${edu}`}>
            <h3>Education</h3>
            <div>
              <InputFields label="School Name" typeName="text" />
              <InputFields label="Title Of Study" typeName="text" />
              <InputFields label="Date Of Study" typeName="date" />
            </div>
          </div>
        );
      }

      return (
        <div key={`${edu}`}>
          <h3>
            Education #{index}{' '}
            <button
              onClick={() => {
                this.removeEdu(index);
              }}
            >
              Del
            </button>
          </h3>
          <div>
            <InputFields label="School Name" typeName="text" />
            <InputFields label="Title Of Study" typeName="text" />
            <InputFields label="Date Of Study" typeName="date" />
          </div>
        </div>
      );
    });

    return education;
  }

  generateJobExperience() {
    let job = this.state.jobExperience.map((job, index) => {
      if (index === 0) {
        return (
          <div key={`${job}`}>
            <h3>Job Experience</h3>
            <div>
              <InputFields label="Company Name" typeName="text" />
              <InputFields label="Position Title" typeName="text" />
              <InputFields label="Main Tasks" typeName="text" />
              <InputFields label="Date when started position" typeName="date" />
              <InputFields label="Date when ended position" typeName="date" />
            </div>
          </div>
        );
      }

      return (
        <div key={`${job}`}>
          <h3>
            Job Experience #{index}{' '}
            <button
              onClick={() => {
                this.removeJob(index);
              }}
            >
              Del
            </button>
          </h3>
          <div>
            <InputFields label="Company Name" typeName="text" />
            <InputFields label="Position Title" typeName="text" />
            <InputFields label="Main Tasks" typeName="text" />
            <InputFields label="Date when started position" typeName="date" />
            <InputFields label="Date when ended position" typeName="date" />
          </div>
        </div>
      );
    });

    return job;
  }

  newEdu() {
    const tempArray = [...this.state.education];
    tempArray.push(`Education${this.edu}`);
    this.edu += 1;
    this.setState({ education: tempArray });
  }

  removeEdu(index) {
    const tempArray = [...this.state.education];
    tempArray.splice(index, 1);
    this.setState({ education: tempArray });
  }

  newJob() {
    const tempArray = [...this.state.jobExperience];
    tempArray.push(`Education${this.job}`);
    this.job += 1;
    this.setState({ jobExperience: tempArray });
  }

  removeJob(index) {
    const tempArray = [...this.state.jobExperience];
    tempArray.splice(index, 1);
    this.setState({ jobExperience: tempArray });
  }

  render() {
    const education = this.generateEducation();
    const jobExperience = this.generateJobExperience();
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h3>Personal Info</h3>
        <div>
          <InputFields label="Full Name" typeName="text" />
          <InputFields label="Email" typeName="email" />
          <InputFields label="Phone Number" typeName="tel" />
        </div>
        {education}
        <button onClick={this.newEdu} type="button">
          +
        </button>
        {jobExperience}
        <button onClick={this.newJob} type="button">
          +
        </button>
      </form>
    ); //
  }
}

export default FormContainer;
