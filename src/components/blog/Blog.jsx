import ArticleBox from "../articleBox/ArticleBox";

function Blog() {
  return (
    <div className="">
      <h1 style={{ textAlign: "center", marginBlock: "20px" }}>
        Most Viewed By Patient
      </h1>
      <ArticleBox amount={6} />
    </div>
  );
}

export default Blog;
