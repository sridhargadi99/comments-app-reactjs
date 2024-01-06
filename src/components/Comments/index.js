import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isActive: false,
      bgClassName:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  triggeredDeleteButton = id => {
    const {commentsList} = this.state
    const getNewCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: getNewCommentsList})
  }

  triggeredLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isActive: !eachComment.isActive}
        }
        return eachComment
      }),
    }))
  }

  inputValue = event => {
    this.setState({name: event.target.value})
  }

  textareaValue = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="comment-main-container">
        <div className="comment-sub-container">
          <h1 className="comment-heading-style">Comments</h1>
          <div className="image-input-container">
            <img
              className="image-style"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
            <div className="technology-container">
              <p className="technology-style">
                Say something about 4.0 Technologies
              </p>
              <form className="form-container" onSubmit={this.addComment}>
                <input
                  className="input-style"
                  placeholder="Your Name"
                  type="text"
                  value={name}
                  onChange={this.inputValue}
                />
                <textarea
                  rows="6"
                  placeholder="Your Comment"
                  className="textarea-style"
                  onChange={this.textareaValue}
                  value={comment}
                >
                  {comment}
                </textarea>
                <button className="button-style" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <div>
            <hr className="hr-style" />
          </div>
          <div>
            <p className="comment-paragraph-style">
              <span className="span-style">{commentsList.length}</span> Comments
            </p>
            <ul className="list-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                  triggeredDeleteButton={this.triggeredDeleteButton}
                  triggeredLikeButton={this.triggeredLikeButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
