import { useRef, useState, useEffect, useCallback } from 'react';
import ApexCharts from 'apexcharts';

export const ChartLine = () => {
  const chartref = useRef(null);

  useEffect(() => {
    if (!chartref.current) {
      return undefined;
    }

    const options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
      }
    }

    const chart = new ApexCharts(chartref.current, options)

    chart.render();
  }, [chartref.current])

  return (
    <div className="chart-container">
      <div ref={chartref} />
    </div>
  )
} 