import BlogList from "../components/Blog/BlogList";

const Blog = () => {
  return (
    <div className="container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20 justify-center items-center flex flex-col azeret-mono-400">
      <h1 className="mb-4 azeret-mono-600 text-4xl text-darkgrey dark:text-pinktext">
        Blog
      </h1>
      <p className="text-xs text-center text-gray-500 dark:text-gray-300 max-w-4xl mb-8">
        Just a place where I can dump my thoughts, ideas and things. Feel free
        to stalk through this page haha! &#x1f440;
      </p>
      <BlogList />
    </div>
  );
};

export default Blog;
