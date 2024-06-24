import Blog from "./Blog";

interface BlogData {
  title: string;
  date: string;
  content: string;
  image?: string;
}

const blogData: BlogData[] = [
  {
    title: "My first blog! 🥳",
    date: "24/06/2024",
    content: `Welcome to my blog! This space is for sharing my thoughts, experiences, and anything else that comes to mind. I hope it will encourage me to write more and delve into journaling, which I really enjoy for reflecting and documenting my journey.

        I also plan to share my work as content on platforms like TikTok. You can find me on TikTok @Deve5h, where I already post about my projects. I’m excited to do this more consistently—see you there!

        Here’s what you can expect to find on my blog:

        • Projects
        • Travel
        • Creative Stuff
        • And more!

        Stay tuned for updates! 😊🤪`,
  },
];

const BlogList = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      {blogData.map((blog, index) => (
        <Blog
          key={index}
          title={blog.title}
          date={blog.date}
          content={blog.content}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default BlogList;
