const BlogList = ({ allBlogs }) => {
  return (
    <div>
      <h3>List of all blog posts will go here</h3>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div>
        <ul>
          {allBlogs.map((blog) => (
            <li key={blog.frontmatter.title}>{blog.frontmatter.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
