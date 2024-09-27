import { delay } from "@/src/utils/delay";

const ComponentOne = async () => {
  await delay(3000);

  throw new Error("Error");
  return (
    <div className="border-2 border-gray-500 rounded-md size-[400px] p-2">
      <h1>Component One</h1>
    </div>
  );
};

export default ComponentOne;
