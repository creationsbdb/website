const BlogList = ({ allBlogs }) => {
  return (
    <div className="container">
      {allBlogs.map((blog) => (
        <div key={'div-' + blog.frontmatter.title} className="bloc">
          <a key={'a-' + blog.frontmatter.title} href={'/blog/' + blog.slug}>
            <h3 key={'h3-' + blog.frontmatter.title}>
              {blog.frontmatter.title}
            </h3>
            <p>{blog.frontmatter.description + ' ... Lire la suite 👀'}</p>
          </a>
        </div>
      ))}
      <style jsx>{``}</style>
    </div>
  );
};

export default BlogList;
