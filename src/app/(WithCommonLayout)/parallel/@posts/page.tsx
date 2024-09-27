import { delay } from "@/src/utils/delay";

const PostsPage = async () => {
  await delay(4000);
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-5">
      <div className="bg-teal-300 h-[400px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-black font-semibold">Dynamic Content</h1>
      </div>
    </div>
  );
};

export default PostsPage;
