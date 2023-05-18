import Image from "next/image";

type Props = {
  image: string;
  name: string;
  weight: number;
  abilities: string[];
};

const Card = ({ image, name, weight, abilities }: Props) => {
  return (
    <div className="w-72 flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full">
        <Image
          src={image}
          alt={"pokemon picture"}
          height={"250"}
          width={"250"}
          className="my-0 mx-auto"
        />
      </div>
      <span className="self-end mr-5 px-10 py-1 text-sm font-medium text-center text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 ">
        Weight: {weight}
      </span>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        {abilities.map((ability) => (
          <span className="pr-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {ability}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
