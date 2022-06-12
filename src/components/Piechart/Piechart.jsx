import React from 'react'
import Chart from 'react-google-charts';

const Piechart = () => {
  const pieData = [
    ['Task', 'Hours per Day'],
    ['Material', 1100],
    ['Learners', 140],
    ['Assessments', 270],
    ['Courses',190]
  ]
  const pieOptions = {
    title: 'Total Count',
    pieHole: 0.4,
  }
      
  return (
    <div className="container mt-5">
    <h2>LMS Overall Piechart</h2>
    <Chart
      width={'600px'}
      height={'320px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={pieData}
      options={pieOptions}
      rootProps={{ 'data-testid': '3' }}
    />
  </div>
  )
}

export default Piechart