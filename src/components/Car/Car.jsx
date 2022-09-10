import './Car.scss'

export const Car = ({ car, sort }) => {
  return (
    <div className="car" key={car.id}>
      <div className="car__name">
        <div>{car.brand}</div>
        <div>{car.model}</div>
      </div>
      <div className="car__country" onClick={() => sort(car.country)}>
        {car.country}
      </div>
    </div>
  )
}
