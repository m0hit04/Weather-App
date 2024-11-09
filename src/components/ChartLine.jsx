import { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';

export const ChartLine = () => {
  const chartref = useRef(null);

  useEffect(() => {

    const options = {
      series: [{
        name: 'Temp',
        data: [30,40,45,50,49,60,70]
      }],
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      title: {
        text: 'Temperature',
        align: 'center'
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      }
    }

    const chart = new ApexCharts(chartref.current, options)
    chart.render();

    return () => {
      chart.destroy();
    }
  }, [])

  return (
    <div className="w-4/12">
      <div ref={chartref} />
    </div>
  )
} 