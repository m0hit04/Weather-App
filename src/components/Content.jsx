import {Navbar} from './Navbar'
import { WeatherInfo } from './WeatherInfo'
import { ChartLine } from './ChartLine'

const Content = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col mt-16 gap-4'>
        <WeatherInfo />
        <ChartLine />
      </div>
    </>
  )
}

export default Content