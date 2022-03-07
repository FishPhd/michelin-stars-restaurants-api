import Image from "next/image";
import { Restaurants } from "../../graphql/generated/graphql";

export default function infoWindow(restaurant: Restaurants) {
  const stars = "&#x273D".repeat(restaurant.rating);
  const cuisines = restaurant.cuisine.split(", ");
  return (
    <div className="infowindow-container">
      <Image
        // className="pt-4 w-40 h-40 object-cover"
        src={restaurant.img}
        alt={restaurant.name + " Image"}
        unoptimized={true}
      />
      <div className="inner">
        <h4 className="text-xl pt-2 font-bold">
          <a
            className="outline-0 hover:text-red-500 hover:underline"
            href={restaurant.link}
          >
            {restaurant.name}
          </a>
        </h4>
        <p>{restaurant.location}</p>

        <p className="text-lg text-rose-600">{stars}</p>
        <div className="flex">
          {cuisines.map((c, i) => (
            <div
              className="rounded-lg bg-red-600 p-2 w-fit mr-2 font-medium"
              key={restaurant.name + "_cuisine" + i}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
