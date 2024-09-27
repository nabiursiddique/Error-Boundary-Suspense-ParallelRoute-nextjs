const Parallel = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-5">
      <div className="bg-purple-300 h-[400px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-black font-semibold">Static Content</h1>
      </div>
    </div>
  );
};

// what if we want to show two different page in one layout and those two page are different like what if one page is fetching data and another is not fetching data in this situation we use parallel routing

export default Parallel;
