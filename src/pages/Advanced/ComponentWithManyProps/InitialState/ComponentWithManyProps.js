import { useMemo } from "react";

const applyFilters = (data, filters) => {
  // some logic
  return data;
};
const applySorting = (data, sorting) => {
  // some logic
  return data;
};
const applyLimit = (data, limit) => {
  // some logic
  return data;
};

// Compare with ../fixed/ComponentWithLessPropsWrapper.js
export const ComponentWithManyProps = ({
  width,
  height,
  padding,
  className,
  posts,
  filters,
  sorting,
  limit,
  comments,
  authors,
}) => {
  const transformedPosts = useMemo(() => {
    let wipPosts = posts;
    wipPosts = applyFilters(wipPosts, filters);
    wipPosts = applySorting(wipPosts, sorting);
    wipPosts = applyLimit(wipPosts, limit);
    return wipPosts;
  }, [posts, filters, sorting, limit]);

  return (
    <div>
      <ul style={{ width, height, padding }} className={className}>
        {transformedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text} - <b>{authors[comment.authorId].name}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
