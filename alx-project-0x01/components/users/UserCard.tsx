import { User } from "@/interfaces/user";

const UserCard = ({ user }: { user: User }) => (
  <div className="border p-4 rounded">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    <p>
      {user.address.street}, {user.address.city}
    </p>
  </div>
);

export default UserCard;
