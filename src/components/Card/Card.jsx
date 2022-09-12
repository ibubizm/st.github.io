import './Card.scss'
import dotsImg from './dots.svg'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, modalClose, modalOpen, remove } from '../../redux/reducer'
import { Modal } from '../Modal/modal'
import { Button } from '../button/Button'

export const Card = ({ post }) => {
  const { visible } = useSelector((state) => state.postReducer)
  const [value, setValue] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const sortRef = useRef()

  const changePost = () => {
    dispatch(change({ id: post.id, value, date: new Date().toLocaleString() }))
    dispatch(modalClose())
  }

  const onClose = (e) => {
    e.stopPropagation()
    dispatch(modalClose())
  }

  const handleOutsideClick = (event) => {
    if (!event.path.includes(sortRef.current)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__name">Ernest Ibubizm</div>
        <div className="card__options">
          <div className="card__date">{post.date}</div>
          <div ref={sortRef} className="dropdown">
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              className={'card__menu'}
              src={dotsImg}
              alt="options"
            />
            {isOpen && (
              <ul className="dropdown-menu">
                <li
                  onClick={() => {
                    dispatch(remove(post))
                    setIsOpen(false)
                  }}
                >
                  удалить
                </li>
                <li
                  onClick={() => {
                    dispatch(modalOpen())
                    setIsOpen(false)
                  }}
                >
                  изменить
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="card__body">{post.value}</div>
      {visible && (
        <Modal title={'Изменить пост'} onClose={onClose}>
          <div className="posts-creation">
            <textarea
              placeholder="изменить пост"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={changePost}>Изменить</Button>
          </div>
        </Modal>
      )}
    </div>
  )
}
