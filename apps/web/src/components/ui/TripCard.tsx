import { type Trip } from "../../services/types";
interface TripCardProps {
  trip: Trip;
}

export const TripCard = ({ trip }: TripCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <img
        src={trip.imageUrl}
        alt={trip.destination}
        className="h-48 w-full object-cover"
      />
      <div className="p-5 flex flex-col grow">
        <h3 className="text-blue-900 font-bold text-lg mb-2">
          {trip.origin} - {trip.destination}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {trip.description}
        </p>

        <div className="mt-auto flex justify-between items-end">
          <div>
            <span className="text-gray-500 text-xs block">A partir de</span>
            <span className="text-blue-900 font-bold text-xl">
              R${" "}
              {trip.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>
          <button className="text-blue-700 font-semibold text-sm hover:underline cursor-pointer">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};
