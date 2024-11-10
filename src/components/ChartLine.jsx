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
  const isDarkMode = document.documentElement.classList.contains('dark');

  useEffect(() => {
    const options = {
      series: [{
        name: 'Temp',
        data: yAxisData,
        color: '#EAB308' // yellow-500
      }],
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        background: 'transparent',
        foreColor: isDarkMode ? '#94A3B8' : '#475569' // dark: slate-400, light: slate-600
      },
      title: {
        text: 'Temperature',
        align: 'center',
        style: {
          color: isDarkMode ? '#94A3B8' : '#475569' // dark: slate-400, light: slate-600
        }
      },
      xaxis: {
        categories: xAxisCategories,
        labels: {
          style: {
            colors: isDarkMode ? '#94A3B8' : '#475569' // dark: slate-400, light: slate-600
          }
        },
        axisBorder: {
          color: isDarkMode ? '#475569' : '#64748B' // dark: slate-600, light: slate-500
        },
        axisTicks: {
          color: isDarkMode ? '#475569' : '#64748B' // dark: slate-600, light: slate-500
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: isDarkMode ? '#94A3B8' : '#475569' // dark: slate-400, light: slate-600
          }
        }
      },
      grid: {
        borderColor: isDarkMode ? '#64748B' : '#64748B', // slate-500
        strokeDashArray: 4
      },
      theme: {
        mode: isDarkMode ? 'dark' : 'light'
      },
      tooltip: {
        theme: isDarkMode ? 'dark' : 'light'
      }
    }

    const chart = new ApexCharts(chartref.current, options)
    chart.render();

    return () => {
      chart.destroy();
    }
  }, [temperatureData, isDarkMode])

  return (
    <div className="w-full md:w-10/12 px-4 md:mx-auto lg:w-8/12">
      <div ref={chartref} className="dark:bg-transparent" />
    </div>
  )
}