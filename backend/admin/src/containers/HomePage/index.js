import React, { memo, useEffect, useState } from 'react';

import { Block, Container } from './components';
import attendance from '../../attendance';

import axios from 'axios';
import { Pie } from 'react-chartjs-2';


const HomePage = ({ global: { plugins }, history: { push } }) => {

  let [actualAttendance, setActualAttendance] = useState(35);
  let [targetGroup, setTargetGroup] = useState('men');
  let [month, setMonth] = useState(1);
  let [event, setEvent] = useState([]);
  let [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    let fetchEvents = async () => {
      let result = await axios.get("http://localhost:1337/events/3");
      if (result.status == 200) {
        setEvent(result.data);
      } else {
        alert('backend error');
      }
    }
    fetchEvents();
  }, [])
  const handleActualAttendance = (event) => {
    setActualAttendance(event.target.value);
    // console.log(actualAttendance)
  };
  const handleTargetGroup = (event) => {
    setTargetGroup(event.target.value);
  };
  const handleMonth = (event) => {
    setMonth(event.target.value);
  };
 
  const handleSubmit = async () => {
    let attendanceResult = await attendance(actualAttendance, targetGroup, month);
    setAttendanceData(attendanceResult);

    if (attendanceResult.remark) {
      let res = await axios.post(
        "http://localhost:1337/attendances",
        {
          remark: attendanceResult.remark,
          category: attendanceResult.category,
          program: attendanceResult.program,
          actualAttendance: attendanceResult.actualAttendance,
          expectedAttendance: attendanceResult.expectedAttendance,
          targetGroup: attendanceResult.targetGroup,
          month: attendanceResult.month
      });
    }
  };
  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        
      },
    ],
  };

  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>
              <div>
              <label>
                Actual Attendance:
                <input type="text" value={actualAttendance} onChange={handleActualAttendance} />
              </label>
              <label>
                Target Group:
                <input type="text" value={targetGroup} onChange={handleTargetGroup} />
              </label>
              <label>
                Month:
                <input type="text" value={month} onChange={handleMonth} />
              </label>
                <button type="button" onClick={handleSubmit}>Submit</button>
              </div>
            </Block>
            <Block>
              <p>
                Remark:  {attendanceData.remark}
              </p>
              <p>
                Category: {attendanceData.category}
              </p>
              <p>
               Program: {attendanceData.program}
              </p>
            </Block>
            <Block>
              <p>Event: {event.title}
              </p>
              <p>Description: {event.description}
              </p>
            </Block>
            <Pie
              data={data}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
