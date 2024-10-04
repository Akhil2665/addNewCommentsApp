// Write your code here

import './index.css'

const CommentItem = props => {
  const {commentDetails, backgroundClassName, onChangeLike, deleteComment} =
    props

  const {commentId, userName, userComment, isLiked} = commentDetails

  const togglesLikeClass = () => {
    onChangeLike(commentId)
  }

  const onClickDelete = () => {
    deleteComment(commentId)
  }

  const deleteIconUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

  const likeBtnUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedNameClass = isLiked ? 'like text-info' : 'like'
  return (
    <li className="list-container">
      <div className="comment-text-container">
        <p className={`profile ${backgroundClassName}`}>
          {userName.slice(0, 1)}
        </p>
        <div className="comment-details">
          <h1 className="user-name">
            {userName} <span className="time">less than a minute ago</span>
          </h1>
          <p className="user-comments">{userComment}</p>
        </div>
      </div>
      <div className="icon-container">
        <div className="like-container">
          <button type="button" onClick={togglesLikeClass}>
            <img src={likeBtnUrl} className="icon" alt="like" />

            <p className={likedNameClass}>Like</p>
          </button>
        </div>
        <button type="button" onClick={onClickDelete}>
          <img src={deleteIconUrl} className="icon" alt="delete" />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
