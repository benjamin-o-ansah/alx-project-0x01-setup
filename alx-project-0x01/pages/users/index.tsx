import { GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import UserCard from "@/components/users/UserCard";
import { User } from "@/interfaces/user";

interface UsersPageProps {
  users: User[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};
