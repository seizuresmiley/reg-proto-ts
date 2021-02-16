import { Fragment } from "react"
import './Schedule.css';

const Schedule = () => {
    return(
        <Fragment>
  <h2 id="schedule-heading">Time Table</h2>
  <div className="schedule" aria-labelledby="schedule-heading">
    <span className="track-slot" aria-hidden="true" style={{gridColumn: 'track-1', gridRow: 'tracks'}}>Monday</span>
    <span className="track-slot" aria-hidden="true" style={{gridColumn: 'track-2', gridRow: 'tracks'}}>Tuesday</span>
    <span className="track-slot" aria-hidden="true" style={{gridColumn: 'track-3', gridRow: 'tracks'}}>Wednesday</span>
    <span className="track-slot" aria-hidden="true" style={{gridColumn: 'track-4', gridRow: 'tracks'}}>Thursday</span>
    <span className="track-slot" aria-hidden="true" style={{gridColumn: 'track-5', gridRow: 'tracks'}}>Friday</span>
    <h3 className="day-slot">Monday</h3>
    <div className="session session-1 track-1" style={{gridColumn: 'track-1', gridRow: 'time-1015 / time-1145'}}>
      <h3 className="session-title"><a>JPN-102</a></h3>
      <span className="session-time">10:15 - 11:45</span>
      <span className="session-track">Monday</span>
      <span className="session-presenter">B603 Section 2</span>
    </div>
    <div className="session session-2 track-1" style={{gridColumn: 'track-1', gridRow: 'time-1345 / time-1700'}}>
      <h3 className="session-title"><a>MSC-112</a></h3>
      <span className="session-time">13:45 - 17:00</span>
      <span className="session-track">Monday</span>
      <span className="session-presenter">D201 Section 1</span>
    </div>

    <h3 className="day-slot">Tuesday</h3>
    <div className="session session-1 track-2" style={{gridColumn: 'track-2', gridRow: 'time-1345 / time-1700'}}>
      <h3 className="session-title"><a>INT-108</a></h3>
      <span className="session-time">13:45 - 17:00</span>
      <span className="session-track">Tuesday</span>
      <span className="session-presenter">B703 Section 2</span>
    </div>
    <div className="session session-2 track-2" style={{gridColumn: 'track-2', gridRow: 'time-1130 / time-1330'}}>
      <h3 className="session-title"><a>INT-108</a></h3>
      <span className="session-time">11:30 - 14:00</span>
      <span className="session-track">Tuesday</span>
      <span className="session-presenter">B404 Section 2</span>
    </div>
    <h3 className="day-slot">Wednesday</h3>
    <div className="session session-1 track-3" style={{gridColumn: 'track-3', gridRow: 'time-0830 / time-1000'}}>
      <h3 className="session-title"><a>JPN-102</a></h3>
      <span className="session-time">08:30 - 10:00</span>
      <span className="session-track">Wednesday</span>
      <span className="session-presenter">B702 Section 2</span>
    </div>
    <div className="session session-2 track-3" style={{gridColumn: 'track-3', gridRow: 'time-1015 / time-1215'}}>
      <h3 className="session-title"><a>ENL-112</a></h3>
      <span className="session-time">10:15 - 12:15</span>
      <span className="session-track">Wednesday</span>
      <span className="session-presenter">B601 Section 2</span>
    </div>
    <div className="session session-3 track-3" style={{gridColumn: 'track-3', gridRow: 'time-1015 / time-1215'}}>
      <h3 className="session-title"><a>ENL-112</a></h3>
      <span className="session-time">10:15 - 12:15</span>
      <span className="session-track">Wednesday</span>
      <span className="session-presenter">B601 Section 2</span>
    </div>
    <h3 className="day-slot">Thursday</h3>
    <div className="session session-1 track-4" style={{gridColumn: 'track-4', gridRow: 'time-1015 / time-1330'}}>
      <h3 className="session-title"><a>MSC-201</a></h3>
      <span className="session-time">10:15 - 13:30</span>
      <span className="session-track">Thursday</span>
      <span className="session-presenter">D203 Section 1</span>
    </div>
    <h3 className="day-slot">Friday</h3>
    <div className="session session-1 track-5" style={{gridColumn: 'track-5', gridRow: 'time-0830 / time-1145'}}>
      <h3 className="session-title"><a>HUM-125</a></h3>
      <span className="session-time">08:30 - 11:45</span>
      <span className="session-track">Thursday</span>
      <span className="session-presenter">C501 Section 2</span>
    </div>



    <h2 className="time-slot" style={{gridRow: 'time-0800'}}>8:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-0900'}}>9:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1000'}}>10:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1100'}}>11:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1200'}}>12:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1300'}}>13:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1400'}}>14:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1500'}}>15:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1600'}}>16:00</h2>

    <h2 className="time-slot" style={{gridRow: 'time-1700'}}>17:00</h2>


  </div>


</Fragment>
    )
}

export default Schedule;