
import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto">
        <Image
          alt={name}
          src={img}
          width={500} // Set the desired width
          height={300} // Set the desired height
          objectFit="cover"
          className="hover:scale-105 transition-all ease-out duration-300"
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
