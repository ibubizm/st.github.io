import './News.scss'
import { useDispatch, useSelector } from 'react-redux'
import { sortByCountry, sortByAlphabet, all } from '../../redux/newsReducer'
import { Car } from '../../components/Car/Car'
import { Button } from '../../components/button/Button'
import { useState } from 'react'

const countries = [
  { country: 'germany' },
  { country: 'italy' },
  { country: 'france' },
  { country: 'england' },
]

export const News = () => {
  const dispatch = useDispatch()
  const { news } = useSelector((state) => state.newsReducer)
  const [selectedCountry, setSelectedCountry] = useState(null)

  const sort = (country) => {
    setSelectedCountry(country)
    dispatch(sortByCountry(country))
  }

  const selectCotegory = (country) => {
    setSelectedCountry(country)
    dispatch(sortByCountry(country))
  }

  return (
    <div className="container news">
      <div className="sort">
        <ul className="sort__list">
          <li
            className={
              selectedCountry == null ? 'sort__item active' : 'sort__item'
            }
            onClick={() => {
              selectCotegory(null)
              dispatch(all())
            }}
          >
            все
          </li>
          {countries.map((country) => (
            <li
              className={
                country.country == selectedCountry
                  ? 'sort__item active'
                  : 'sort__item'
              }
              onClick={() => selectCotegory(country.country)}
            >
              {country.country}
            </li>
          ))}
        </ul>
        <Button onClick={() => dispatch(sortByAlphabet())}>по алфавиту</Button>
      </div>
      <div className="cars">
        {news.map((car) => (
          <Car car={car} key={car.id} sort={sort} />
        ))}
      </div>
    </div>
  )
}
