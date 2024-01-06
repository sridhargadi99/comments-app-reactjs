// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, triggeredDeleteButton, triggeredLikeButton} = props
  const {id, name, comment, date, isActive, bgClassName} = commentDetails

  const deleteComment = () => {
    triggeredDeleteButton(id)
  }

  const likeButton = () => {
    triggeredLikeButton(id)
  }

  const imageUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeChange = isActive ? 'like-button-style2' : 'like-button-style1'

  return (
    <li className="list-style-container">
      <div className="name-comment-container">
        <div className={`name-container ${bgClassName}`}>
          <p>{name.slice(0, 1)}</p>
        </div>
        <div>
          <div className="name-time-container">
            <h1 className="name-style">{name}</h1>
            <p className="time-style">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment-style">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div>
          <img className="like-image-style" src={imageUrl} alt="like" />
          <button
            type="button"
            className={`like-button-style ${likeChange}`}
            onClick={likeButton}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="button-style1"
          data-testid="delete"
          onClick={deleteComment}
        >
          <img
            className="delete-button-style"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <div>
        <hr className="hor-style" />
      </div>
    </li>
  )
}

export default CommentItem
