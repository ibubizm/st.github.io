import './Profile.scss'
import photo from './3.jpg'
import { useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Modal } from '../../components/Modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../redux/reducer'
import { Button } from '../../components/button/Button'

export const Profile = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.postReducer)
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const createPost = (e) => {
    e.preventDefault()
    const id = Date.now()
    dispatch(add({ id, value, date: Date().toLocaleString() }))
    setValue('')
    setVisible(false)
  }

  const onClose = (e) => {
    e.stopPropagation()
    setVisible(false)
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
        <Button onClick={() => setVisible(!visible)}>Создать Пост</Button>
      </div>
      {visible && (
        <Modal title={'Новый пост'} onClose={onClose}>
          <div className="posts-creation">
            <textarea
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
