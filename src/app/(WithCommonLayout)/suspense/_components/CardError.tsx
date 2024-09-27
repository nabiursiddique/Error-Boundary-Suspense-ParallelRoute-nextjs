const CardError = () => {
  return (
    <div className="border-2 border-gray-500 rounded-md size-[400px] p-2 space-y-5">
      <div className="flex justify-center items-center h-[400px]">
        <h1 className="text-2xl text-red-400 font-bold">
          Something went wrong
        </h1>
      </div>
    </div>
  );
};

export default CardError;
