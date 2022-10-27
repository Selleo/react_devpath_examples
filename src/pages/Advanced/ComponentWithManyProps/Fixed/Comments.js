export const Comments = ({ comments, authors }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment.id}>
        {comment.text} - <b>{authors[comment.authorId]}</b>
      </li>
    ))}
  </ul>
);
