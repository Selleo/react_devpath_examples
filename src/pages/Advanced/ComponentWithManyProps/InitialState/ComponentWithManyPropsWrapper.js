import { ComponentWithManyProps } from "./ComponentWithManyProps";

export const ComponentWithManyPropsWrapper = () => {
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

  return (
    <ComponentWithManyProps
      width="1490px"
      height="140px"
      padding="20px"
      className="someClass"
      posts={posts}
      filters={filters}
      sorting={sorting}
      limit={limit}
      comments={comments}
      authors={authors}
    />
  );
};
