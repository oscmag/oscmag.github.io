import React, { Component } from 'react';
import './Workouts.css';

import addIcon from '../assets/add-icon.png';

const workouts = [
  {
    title: 'SS A',
    exercises: [
      {name: 'Bench press', sets: [{reps: 10, weight: 50}, {reps: 10, weight: 50}]},
      {name: 'Squats', sets: [{reps: 10, weight: 50}, {reps: 10, weight: 50}]},
      {name: 'Deadlift', sets: [{reps: 10, weight: 50}, {reps: 10, weight: 50}]},
    ],
    date: Date.now(),
  },
  {
    title: 'SS B',
    exercises: [
      {name: 'Bench press', sets: [{reps: 10, weight: 50}, {reps: 10, weight: 50}]},
      {name: 'Squats', sets: [{reps: 10, weight: 50}, {reps: 10, weight: 50}]},
      {name: 'Deadlift', sets: [{reps: 10, weight: 50}, {reps: 10, weight: 50}]},
    ],
    date: Date.now(),
  }
]

class Workouts extends Component {
  render() {
    return (
      <div className='workouts-container'>
        <div className='add-button'>
          <img id='add-icon' onClick={this.addWorkout} src={addIcon} alt='add-icon'/>
        </div>
        <div>
          {workouts.map((workout) => {
            return (
              <div className='workout-wrapper'>
                <div>Title:</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Workouts;
