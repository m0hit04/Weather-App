import { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { useSelector } from 'react-redux';
import { useFetchTemperature } from '../hooks/useFetchTemperature';

export const ChartLine = () => {
  useFetchTemperature()
  const chartref = useRef(null);
  const temperatureData = useSelector((state) => state.temperature);
  const xAxisCategories = temperatureData.map((item) => item.time);
  const yAxisData = temperatureData.map((item) => item.temp);
  useEffect(() => {

    const options = {
      series: [{
        name: 'Temp',
        data: yAxisData
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
        categories: xAxisCategories
      }
    }

    const chart = new ApexCharts(chartref.current, options)
    chart.render();

    return () => {
      chart.destroy();
    }
  }, [temperatureData])

  return (
    (<div className="w-full md:w-10/12 px-4 md:mx-auto lg:w-8/12">
      <div ref={chartref} />
    </div>)
  )
}