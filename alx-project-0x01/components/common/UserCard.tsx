import React from "react";
import { UserData } from "@/interfaces";

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const {
    name,
    username,
    email,
    phone,
    website,
    address,
    company,
  } = user;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>

      <div className="mt-3 space-y-1 text-sm text-gray-700">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <p className="font-medium">Address</p>
        <p>
          {address.street}, {address.suite}
        </p>
        <p>
          {address.city} – {address.zipcode}
        </p>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <p className="font-medium">Company</p>
        <p>{company.name}</p>
        <p className="italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
