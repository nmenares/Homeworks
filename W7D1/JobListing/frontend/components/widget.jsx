import { connect } from 'react-redux'

import React from 'react';
import Job from './job';
import selectLocation from './../actions';

class Widget extends React.Component {

  constructor(props) {
    super(props);
    this.cities = ["San Francisco", "Seattle", "New York", "Austin", "Remote"];
  }

  fetchJobListings(city) {
    $.ajax({
      crossDomain: true,
      dataType: 'jsonp',
      url: `https://jobs.github.com/positions.json?location=${city}&markdown=true`,
      type: "GET",
      success: function(resp) {
        // tell the store to update with the new location and jobs;
        // use the action creator 'selectLocation' to build the object to
        // be dispatched
        this.props.handleSelectionLocation(city, resp);

      }.bind(this)
    });
  }

  render() {

    // get the store's current state and deconstruct it into 'jobs'
    // and 'city' variables
    const cityOptions = this.cities.map(city => (
        <button onClick={ () => { this.fetchJobListings(city) }}
             key={city}
             className="job-option">
          {city}
        </button>
      )
    );

    const jobListings = this.props.jobs.map(job => (
      <Job key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
            description={job.description}
            info = {job.url}/>
    )
    );

    return (
      <div>
        <h1>Github Job Listings</h1>
        <h3>City: {this.props.city}</h3>

        <div className="location-selector">
          Location:
          {cityOptions}
        </div>

        <h3>{jobListings.length} Job Listings</h3>
        <ol className="listings-list">
            {jobListings}
        </ol>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
    jobs: state.jobs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectionLocation: (city, jobs) => dispatch(selectLocation(city, jobs))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Widget);
