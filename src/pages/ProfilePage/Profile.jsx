import './Profile.scss'
import photo from './3.jpg'
import { useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Modal } from '../../components/Modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { add, modalClose, modalOpen } from '../../redux/reducer'
import { Button } from '../../components/button/Button'

export const Profile = () => {
  const dispatch = useDispatch()
  const { posts, visible } = useSelector((state) => state.postReducer)
  const [value, setValue] = useState('')

  const createPost = (e) => {
    e.preventDefault()
    if (value) {
      const id = Date.now()
      dispatch(add({ id, value, date: new Date().toLocaleString() }))
      setValue('')
      dispatch(modalClose())
    }
  }

  const onClose = (e) => {
    e.stopPropagation()
    dispatch(modalClose())
  }

  return (
    <div className="container">
      <div className="profile">
        <div className="avatar">
          <img src={photo} alt="avatar" />
        </div>
        <div className="info">
          <div className="name">Ernest</div>
          <div className="name">Ibubizm</div>
        </div>
        <Button onClick={() => dispatch(modalOpen())}>Создать Пост</Button>
      </div>
      {visible && (
        <Modal title={'Новый пост'} onClose={onClose}>
          <div className="posts-creation">
            <textarea
              placeholder="новый пост"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={createPost}>создать</Button>
          </div>
        </Modal>
      )}

      {posts && posts.map((post, index) => <Card key={index} post={post} />)}
    </div>
  )
}
