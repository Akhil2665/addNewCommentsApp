import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here now
const initialCommentsList = []

class Comments extends Component {
  state = {
    commentCount: 0,
    commentsList: initialCommentsList,
    userName: '',
    userComment: '',
    backgroundClass: 'amber',
  }

  addCommentToList = event => {
    event.preventDefault()
    const {userName, userComment, commentsList, commentCount} = this.state
    const backgroundClass = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      commentId: uuidv4(),
      userName,
      userComment,
      isLiked: false,
      dateTime: new Date(),
      backgroundClass,
    }

    this.setState({
      commentsList: [...commentsList, newComment],
      userComment: '',
      userName: '',
      commentCount: commentCount + 1,
    })
  }

  onChangeLike = commentId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.commentId === commentId) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangeUserComment = event => {
    this.setState({userComment: event.target.value})
  }

  deleteComment = commentId => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== commentId,
    )
    this.setState({commentsList: filteredList})
  }

  render() {
    const {commentCount, userName, userComment, commentsList, backgroundClass} =
      this.state

    return (
      <div className="page-container p-5">
        <div className="comment-card">
          <form className="input-container" onSubmit={this.addCommentToList}>
            <h1 className="heading">Comments</h1>
            <p className="about">Say something about 4.0 technologies</p>
            <input
              value={userName}
              placeholder="Your Name"
              className="name-input mb-3"
              onChange={this.onChangeUsername}
            />
            <textarea
              placeholder="Your comment"
              value={userComment}
              className="text-area-input mb-3"
              onChange={this.onChangeUserComment}
            >
              add
            </textarea>
            <button className="comment-button" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="comment-image"
          />
        </div>
        <hr className="w-100" />
        <div className="comment-counter pb-3">
          <p className="comment-count">{commentCount}</p>
          <p className="comments-heading">Comments</p>
        </div>
        <ul>
          {commentsList.length !== 0
            ? commentsList.map(eachObject => (
                <CommentItem
                  commentDetails={eachObject}
                  backgroundClassName={backgroundClass}
                  onChangeLike={this.onChangeLike}
                  deleteComment={this.deleteComment}
                  key={eachObject.commentId}
                />
              ))
            : null}
        </ul>
      </div>
    )
  }
}

export default Comments
