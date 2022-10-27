import { useMemo } from "react";
import { PostsList } from "./PostsList";
import { Comments } from "./Comments";

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

export const ComponentWithLessPropsWrapper = () => {
  const posts = [
    { id: 1, title: "Post1" },
    { id: 5, title: "New Post1" },
    { id: 6, title: "Another Post1" },
    { id: 2, title: "Post2" },
    { id: 3, title: "Post3" },
    { id: 4, title: "Post4" },
  ];
  const filters = [{ title: { operator: "endswith", value: "Post1" } }];
  const sorting = [{ property: "title", order: "asc" }];
  const comments = [
    { id: 1, text: "Nice", authorId: 3 },
    { id: 3, text: "Bad", authorId: 2 },
    { id: 2, text: "Ok", authorId: 1 },
  ];
  const authors = {
    1: { id: 1, name: "Adam" },
    2: { id: 2, name: "Mike" },
    3: { id: 3, name: "Bob" },
  };
  const limit = 2;

  // 1. make calculations in parent component and pass only result
  // instead of multiple props
  const transformedPosts = useMemo(() => {
    let wipPosts = posts;
    wipPosts = applyFilters(wipPosts, filters);
    wipPosts = applySorting(wipPosts, sorting);
    wipPosts = applyLimit(wipPosts, limit);
    return wipPosts;
  }, [posts, filters, sorting, limit]);

  // 2. collect multiple RELATED! props in configuration object
  const uiConfig = {
    styles: { width: "1490px", height: "140px", padding: "20px" },
    className: "someClass",
  };

  // 3. split component into sibling components
  // if they do different things and require other props
  return (
    <div>
      <PostsList uiConfig={uiConfig} posts={transformedPosts} />
      <hr />
      <Comments comments={comments} authors={authors} />
    </div>
  );
};
