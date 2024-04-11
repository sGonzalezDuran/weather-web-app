export const WeatherTemp = ({temp}) => {
  return (
    <div className="temperature">
        <h3>Temperature</h3>
        <p>{temp}&deg;C</p>
    </div>
  )
}
