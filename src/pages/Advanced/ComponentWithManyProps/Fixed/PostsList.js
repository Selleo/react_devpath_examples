export const PostsList = ({ uiConfig, posts }) => (
  <ul {...uiConfig}>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
